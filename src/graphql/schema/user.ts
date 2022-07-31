import { gql } from 'apollo-server-express';

const schema = gql`
  type Query {
    user (
      id: ID!
    ): User

    users (
      id: [ID!]
    ): [User]
  }

  enum Role {
    ADMIN
    AUTHOR
    USER
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    role: Role!
    banned: Boolean
  }
`;

export default schema;
