import { Resolvers } from '../../types/generated/graphql';

export const resolvers: Resolvers = {
  Query: {
    test: async (_, { id }, { dataSources }) => {
      return dataSources.testService.getTestObject({id});
    },
  },
};
