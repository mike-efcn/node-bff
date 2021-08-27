import { FieldResolver, Resolver } from 'type-graphql';
import User from '../types/User';

@Resolver(() => User)
class UserResolver {
  @FieldResolver(() => String)
  async name(): Promise<string> {
    return Date.now().toString(36);
  }

  @FieldResolver(() => Date)
  async createdAt(): Promise<Date> {
    return new Date();
  }
}

export default UserResolver;
