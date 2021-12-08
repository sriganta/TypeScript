import { ArgsType, Field, InputType, Int } from "type-graphql";

@InputType()
export class PostInput {
  @Field(() => Int)
  id: number;

  @Field({ description: "The title of the recipe" })
  title: string;

  @Field()
  author: string;
}