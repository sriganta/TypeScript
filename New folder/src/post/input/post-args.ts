import "reflect-metadata";
import { ArgsType, Field, InputType, Int } from "type-graphql";

@ArgsType()
export class GetPostArgs {
  @Field(() => Int)
  id: number;

//   @Field(type => Int, { nullable: true })
//   take?: number;

//   @Field({ nullable: true })
//   title?: string;
}