import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';
import resolvers from './resolvers';

const createSchema = async (): Promise<GraphQLSchema> => buildSchema({
  resolvers,
  validate: false,
  dateScalarMode: 'isoDate',
});

export default createSchema;
