import { Field, Int, ObjectType } from "type-graphql";
import { Post } from "../post/post.model";

@ObjectType()
export class Comments {
  @Field(() => Int)
  id: number;

  @Field()
  body: string;

  @Field(() => Int, { nullable: true })
  postId?: number;

  @Field(() => Post, { nullable: true })
  posts?: Post;
}