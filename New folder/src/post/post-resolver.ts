import axios from "axios";
import "reflect-metadata";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { PostInput } from "./input/add-post.input";
import { Post } from "./post.model";
import { PostService } from "./post.service";

@Resolver()
export class PostResolver {
  constructor(private postService: PostService) {
      this.postService = new PostService();
  }

  @Query(() => [Post])
  async posts() {
    const posts = await this.postService.getPosts();
    
    if (!posts) throw new Error('Post not found');
    return posts;
  }

  @Query(() => Post)
  async postById(@Arg("id") id: number) {
    return await this.postService.getPostById(id);
  }

  @Mutation(() => Post)
  addPost( @Arg("data") data: PostInput): Promise<Post> {
    return this.postService.addNewPost(data);
  }

//   @Mutation(returns => Boolean)
//   @Authorized(Roles.Admin)
//   async removeRecipe(@Arg("id") id: string) {
//     try {
//       await this.recipeService.removeById(id);
//       return true;
//     } catch {
//       return false;
//     }
//   }
}