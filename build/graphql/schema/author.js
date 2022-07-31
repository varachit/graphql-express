"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema = (0, apollo_server_1.gql) `
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
    authors: [Author]
  }

  type Mutation {
    createAuthor (
      firstName: String! @constraint(pattern: "[a-zA-Z]", uniqueTypeName: "String_FIRSTNAME")
      lastName: String! @constraint(pattern: "[a-zA-Z]", uniqueTypeName: "String_LASTNAME")
      age: Int! @constraint(exclusiveMin: 0, exclusiveMax: 150, uniqueTypeName: "Int_AGE")
      email: String! @constraint(format: "email", uniqueTypeName: "String_EMAIL")
    ): Author
  }
`;
exports.default = schema;
//# sourceMappingURL=author.js.map