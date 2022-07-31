import { gql } from 'apollo-server-express';

const schema = gql`
  type Book {
    id: ID!
    title: String!
    authorId: String!
    author: Author
  }

  type Query {
    book (
      id: ID!
    ): Book

    books (
      id: [ID!]
    ): [Book]
  }

  type Mutation {
    createBook (
      title: String!
      authorId: String! @constraint(format: "uuid", uniqueTypeName: "String_UUID")
    ): Book!

    updateBook (
      id: String!
      title: String!
      authorId: String! @constraint(format: "uuid", uniqueTypeName: "String_UUID")
    ): Book!

    deleteBook (
      id: String!
    ): Book!
  }
`;

export default schema;