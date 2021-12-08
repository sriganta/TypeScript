import axios from "axios";

export class CommentsService {
  constructor() {}

  async getPostComments(postId: number) {
    const postComments = await axios.get(`http://localhost:3000/comments`, {
      params: {
        postId,
      },
    });
    const post = await axios.get(`http://localhost:3000/posts/${postId}`);
    postComments.data[0]['posts'] = post.data;
    
    return postComments.data;
  }
}
