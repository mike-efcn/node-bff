import { NonEmptyArray } from 'type-graphql';
import QueryResolver from './QueryResolver';
import UserResolver from './UserResolver';

const resolvers: NonEmptyArray<Function> = [QueryResolver, UserResolver];

export default resolvers;
