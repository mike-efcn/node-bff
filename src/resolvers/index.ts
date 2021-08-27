import { NonEmptyArray } from 'type-graphql';
import QueryResolver from './QueryResolver';
import UserResolver from './UserResolver';

// eslint-disable-next-line @typescript-eslint/ban-types
const resolvers: NonEmptyArray<Function> = [QueryResolver, UserResolver];

export default resolvers;
