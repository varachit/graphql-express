import { PubSub } from 'graphql-subscriptions';
import { IAuthor } from '../../interface/author';

const pubsub = new PubSub();

const resolver = {
  Query: {
    author (_, args, { dataSources }): IAuthor {
      return dataSources.authorService.doGetAuthor(args);
    },
    authors (_, args, { dataSources }): IAuthor[] {
      return dataSources.authorService.doGetAuthors(args);
    }
  },
  Mutation: {
    createAuthor (_, args, { dataSources }): IAuthor {
      const createdAuthor = dataSources.authorService.doCreateAuthor(args);
      pubsub.publish('AUTHOR_CREATED', { authorCreated: createdAuthor });
      return createdAuthor;
    },
    updateAuthor (_, args, { dataSources }): IAuthor {
      return dataSources.authorService.doUpdateAuthor(args);
    },
    deleteAuthor (_, args, { dataSources }): IAuthor {
      return dataSources.authorSedrvice.doDeleteAuthor(args);
    }
  },
  Subscription: {
    authorCreated: {
      subscribe: () => pubsub.asyncIterator(['AUTHOR_CREATED'])
    }
  }
};

export default resolver;
