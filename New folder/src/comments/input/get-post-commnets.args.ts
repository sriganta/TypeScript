import "reflect-metadata";
import { ArgsType, Field, InputType, Int } from "type-graphql";

@ArgsType()
export class GetPostCommentsArgs {
  @Field(() => Int)
  postId: number;

//   @Field(type => Int, { nullable: true })
//   take?: number;

//   @Field({ nullable: true })
//   title?: string;
}