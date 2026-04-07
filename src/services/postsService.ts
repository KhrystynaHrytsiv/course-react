import {apiService} from "./apiService.ts";
import type {IPost} from "../interfaces/IPost.ts";

export const postsService ={
    getPosts: () =>apiService.get<IPost[]>('posts'),
    getPost:(id:number) =>apiService.get<IPost>('posts/'+id)
}