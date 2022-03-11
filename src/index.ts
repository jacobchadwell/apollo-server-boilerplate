import { ApolloServer } from 'apollo-server';
import * as dotenv from 'dotenv';
import { createConfig } from './config';
dotenv.config();

var config = createConfig() as any;
const server = new ApolloServer(config);

const port = process.env.PORT || 4000;

server.listen(port).then(({ port }) => {
  console.log(`🚀  Server ready at http://localhost:${port}`);
});
