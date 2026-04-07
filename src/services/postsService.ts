import {apiService} from "./apiService.ts";

export const postsService ={
    getPosts: () =>apiService.get('posts')
}