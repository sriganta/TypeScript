import axios from 'axios';
import { PostInput } from './input/add-post.input';
import { Post } from './post.model';

export class PostService {
    constructor() {}

    async getPosts() {
        const posts =  await axios.get('http://localhost:3000/posts');
        return posts.data;
    }

    async getPostById(id: number): Promise<Post> {
        const post =  await axios.get(`http://localhost:3000/posts/${id}`);
        
        return post.data;
    }

    async addNewPost(data: PostInput): Promise<Post> {
        const post =  await axios.post(`http://localhost:3000/posts/`, data);
        
        return post.data;
    }
}