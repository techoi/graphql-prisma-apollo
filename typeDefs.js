const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    me: User
  }

  type User {
      username: String!
  }

  type Mutation {
      changeName(name: String!): User!
  }
`;

module.exports = typeDefs;