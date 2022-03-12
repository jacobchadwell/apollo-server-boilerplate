import { gql } from 'apollo-server';

export const typeDefs = gql`
  extend type Query {
    test(id: Int!): TestResponse
  }

  type TestResponse {
    id: Int
    name: String
  }
`;
