import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  author?: string;
}