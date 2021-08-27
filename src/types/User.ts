import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType('User', { description: 'User' })
class User {
  @Field(() => ID)
  id: string;
}

export default User;
