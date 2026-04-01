import type {IUser} from "../model/IUser.ts";
import {urls} from "../constants/url.ts";
import type {IPost} from "../model/IPost.ts";



export const userService ={
    getUsers: async ():Promise<IUser[]> =>{
         return await fetch(urls.users.base)
                  .then(response => response.json())

    },
    getUser: async (id:number):Promise<IUser> =>{
        return await fetch(urls.users.byId(id))
            .then(response => response.json())
    }
}

export const postService ={
    getPostsByUserId: async (id:number):Promise<IPost[]> =>{
        return await fetch(urls.posts.userPostsById(id))
            .then(response => response.json())
    }
}