import { IBook } from '../../interface/book';
import { IAuthor } from '../../interface/author';

const resolver = {
  Query: {
    book (_, args, { dataSources }): IBook {
      return dataSources.bookService.doGetBook(args);
    },
    books (_, args, { dataSources }): IBook[] {
      return dataSources.bookService.doGetBooks(args);
    }
  },
  Mutation: {
    createBook (_, args, { dataSources }): IBook {
      return dataSources.bookService.doCreateBook(args);
    },
    updateBook (_, args, { dataSources }): IBook {
      return dataSources.bookService.doUpdateBook(args);
    },
    deleteBook (_, args, { dataSources }): IBook {
      return dataSources.bookService.doDeleteBook(args);
    }
  },
  Book: {
    author: ({ authorId }, __, { dataSources }): IAuthor => {
      return dataSources.authorService.doGetAuthor({ id: authorId });
    }
  }
};

export default resolver;
