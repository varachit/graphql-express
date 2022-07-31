"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const apollo_server_1 = require("apollo-server");
const apollo_server_core_1 = require("apollo-server-core");
const schema_1 = require("@graphql-tools/schema");
const graphql_constraint_directive_1 = require("graphql-constraint-directive");
const schemas_1 = tslib_1.__importDefault(require("./graphql/schemas"));
const resolvers_1 = tslib_1.__importDefault(require("./graphql/resolvers"));
const executableSchema = (0, schema_1.makeExecutableSchema)({
    typeDefs: [graphql_constraint_directive_1.constraintDirectiveTypeDefs, ...schemas_1.default],
    resolvers: resolvers_1.default,
});
const executableSchemaWithConstraintDirective = (0, graphql_constraint_directive_1.constraintDirective)()(executableSchema);
const server = new apollo_server_1.ApolloServer({
    schema: executableSchemaWithConstraintDirective,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
        (0, apollo_server_core_1.ApolloServerPluginLandingPageLocalDefault)({ embed: true })
    ]
});
server.listen().then(({ url }) => {
    console.log(`🚀  Server is running on ${url}`);
});
//# sourceMappingURL=app.js.map