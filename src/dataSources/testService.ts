import { RESTDataSource } from 'apollo-datasource-rest';
import { Context } from '../config';
import { QueryTestArgs, TestResponse } from '../types/generated/graphql';

export class TestService extends RESTDataSource<Context> {
  constructor(baseURL?: string) {
    super();
    if (baseURL) {
      this.baseURL = baseURL;
    } else {
      throw new URIError('URL not provided for TestService API');
    }
  }

  async getTestObject(input: QueryTestArgs): Promise<TestResponse> {
    return { id: 1, name: 'testName' } as TestResponse;
  }

  async getTestObjectViaREST(input: QueryTestArgs): Promise<TestResponse> {
    var result = await this.get(`test/${input.id}`) as TestResponse;
    return result;
  }
}
