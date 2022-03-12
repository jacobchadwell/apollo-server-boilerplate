import { Config } from 'apollo-server';
import { TestService } from './dataSources/testService';
import { schema } from './schema';

require('dotenv').config();

export interface Context {
  dataSources: {
    testService: TestService;
  };
}

export const createConfig = (): Config => ({
  schema,
  context: ({ event, req }) => ({
    requestContext: req,
  }),
  dataSources: () => ({
    testService: new TestService(process.env.TEST_SERVICE_BASE_URL),
  }),
  introspection: true
});
