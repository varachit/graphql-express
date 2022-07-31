import { gql } from 'apollo-server-express';

const schema = gql`
  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
  }

  type Query {
    author (
      id: String! @constraint(format: "uuid", uniqueTypeName: "String_UUID")
    ): Author

    authors (
      id: [String!]
    ): [Author]
  }

  type Subscription {
    authorCreated: Author
  }

  type Mutation {
    createAuthor (
      firstName: String! @constraint(pattern: "[a-zA-Z]", uniqueTypeName: "String_FIRSTNAME")
      lastName: String! @constraint(pattern: "[a-zA-Z]", uniqueTypeName: "String_LASTNAME")
      age: Int! @constraint(exclusiveMin: 0, exclusiveMax: 125, uniqueTypeName: "Int_AGE")
      email: String! @constraint(format: "email", uniqueTypeName: "String_EMAIL")
    ): Author

    updateAuthor (
      id: String! @constraint(format: "uuid", uniqueTypeName: "String_UUID")
      firstName: String! @constraint(pattern: "[a-zA-Z]", uniqueTypeName: "String_FIRSTNAME")
      lastName: String! @constraint(pattern: "[a-zA-Z]", uniqueTypeName: "String_LASTNAME")
      age: Int! @constraint(exclusiveMin: 0, exclusiveMax: 125, uniqueTypeName: "Int_AGE")
      email: String! @constraint(format: "email", uniqueTypeName: "String_EMAIL")
    ): Author

    deleteAuthor (
      id: String! @constraint(format: "uuid", uniqueTypeName: "String_UUID")
    ): Author!
  }
`;

export default schema;
