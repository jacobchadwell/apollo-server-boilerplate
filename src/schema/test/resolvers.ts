import { Resolvers, TestResponse } from '../../types/generated/graphql';

export const resolvers: Resolvers = {
  Query: {
    test: async (_, { var1 }, { dataSources }) => {
      return dataSources.testService.getTestObject({var1});
    },
  },
};
