import { ApolloServer, AuthenticationError } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { constraintDirective, constraintDirectiveTypeDefs } from 'graphql-constraint-directive';
import express from 'express';
import http from 'http';

import typeDefs from './graphql/schemas';
import resolvers from './graphql/resolvers';

import * as authorService from './service/authorService';
import * as bookService from './service/bookService';
import * as userService from './service/userService';

import config from './config';

async function startApolloServer (typeDefs, resolvers) {
  const executableSchema = makeExecutableSchema({
    typeDefs: [constraintDirectiveTypeDefs, ...typeDefs],
    resolvers
  });
  const executableSchemaWithConstraintDirective = constraintDirective()(executableSchema);

  const app = express();
  const httpServer = http.createServer(app);

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql'
  });

  const serverCleanup = useServer({
    schema: executableSchema,
    onConnect: async (ctx) => {
      const authToken = (ctx.connectionParams) ? ctx.connectionParams.Authorization as string : undefined;
      const user = (authToken) ? userService.authenticate(authToken) : undefined;
      user ? console.log(`${user.id} is connected!`) : console.log('anonymous is connected!');
    },
    onSubscribe: async (ctx) => {
      const authToken = (ctx.connectionParams) ? ctx.connectionParams.Authorization as string : undefined;
      if (!(userService.isTokenValid(authToken))) {
        console.log('Forbidden');
        return ctx.extra.socket.close(4403, 'Forbidden');
      }
    },
    onDisconnect: async (ctx) => {
      const authToken = (ctx.connectionParams) ? ctx.connectionParams.Authorization as string : undefined;
      const user = (authToken) ? userService.authenticate(authToken) : undefined;
      user ? console.log(`${user.id} is disconnected!`) : console.log('anonymous is disconnected!');
    },
  }, wsServer);

  const server = new ApolloServer({
    schema: executableSchemaWithConstraintDirective,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            }
          };
        }
      },
      ApolloServerPluginLandingPageLocalDefault({ embed: true })
    ],
    dataSources: () => {
      return {
        authorService,
        bookService,
        userService
      } as any;
    },
    context: ({ req }) => {
      const authToken = req.headers.authorization || '';
      const user = userService.authenticate(authToken);
      if (!user) { throw new AuthenticationError('You must be logged in'); }
      return {
        user
      };
    }
  });

  await server.start();

  const corsOptions = {
    origin: ['localhost', 'https://studio.apollographql.com'],
    credentials: true
  };

  server.applyMiddleware({
    app,
    cors: corsOptions,
    path: '/graphql'
  });

  await new Promise<void>(resolve => httpServer.listen({ port: config.port }, resolve));
  console.log('----------------------------------------------------');
  console.log(`🚀  Server is running on port ${config.port}`);
  console.log('----------------------------------------------------');
}

startApolloServer(typeDefs, resolvers);
