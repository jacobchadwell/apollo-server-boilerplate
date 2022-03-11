import { gql, makeExecutableSchema } from 'apollo-server';
import * as Test from './test';

export const types = gql`
  type Query
`;

const modules = [Test];

export const schema = makeExecutableSchema({
  typeDefs: [types, ...modules.map((m) => m.typeDefs)],
  resolvers: [...modules.map((m) => m.resolvers)],
});

export default schema;
