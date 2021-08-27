import { ApolloServer } from 'apollo-server-express';
import { config as dotenv } from 'dotenv';
import express from 'express';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';
import 'reflect-metadata';
import createSchema from './createSchema';

dotenv();

(async () => {
  const app = express();

  // https://github.com/APIs-guru/graphql-voyager#express
  app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }));

  // https://www.apollographql.com/docs/apollo-server/integrations/middleware/#apollo-server-express
  const apollo = new ApolloServer({
    schema: await createSchema(),
  });
  await apollo.start();
  apollo.applyMiddleware({ app });

  const port = process.env.PORT;
  await new Promise((resolve) => {
    app.listen(port, () => {
      resolve(undefined);
    });
  });
  console.log(`Server: http://127.0.0.1:${port}/graphql`);
})();
