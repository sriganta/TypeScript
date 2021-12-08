import { Arg, Args, Query, Resolver } from "type-graphql";
import { Comments } from "./comments-model";
import { CommentsService } from "./comments.service";
import { GetPostCommentsArgs } from "./input/get-post-commnets.args";

@Resolver()
export class CommentsResolver {
    constructor(private commentsService: CommentsService) {
        this.commentsService = new CommentsService();
    }
    @Query(() => [Comments])
    async getComments(@Args() data: GetPostCommentsArgs) {
        const { postId } = data;

        return await this.commentsService.getPostComments(postId);
    }
}