"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema = (0, apollo_server_1.gql) `
  type Book {
    id: ID!
    title: String!
    authorId: String!
    author: Author
  }

  type Query {
    book (id: ID!): Book
    books: [Book]
  }
`;
exports.default = schema;
//# sourceMappingURL=book.js.map