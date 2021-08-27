import { Arg, Query } from 'type-graphql';
import User from '../types/User';

class QueryResolver {
  @Query(() => User, { name: 'user' })
  async getUser(
    @Arg("id") id: string,
  ): Promise<User> {
    return { id };
  }
}

export default QueryResolver;
