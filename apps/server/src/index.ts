import { ApolloServer, gql } from 'apollo-server';
import schema from './modules/schema'

const port = process.env.SERVER_PORT;

const server = new ApolloServer({ schema });

server.listen({ port: 8080 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});