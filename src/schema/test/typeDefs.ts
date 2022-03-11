import { gql } from 'apollo-server';

export const typeDefs = gql`
  extend type Query {
    test(var1: Int!): TestResponse
  }

  type TestResponse {
    id: Int
    name: String
  }
`;
