import {urls} from "../constants/urls.ts";
import type {IUserJson} from "../interfaces/IUser.ts";
import type {IUserDummy} from "../interfaces/IUserDummy.ts";
import type {IPost} from "../interfaces/IPost.ts";
import type {IComment} from "../interfaces/IComment.ts";

const userService ={
    getUsersFromJson: async ():Promise<IUserJson[]> =>{
        return await fetch(urls.users.usersFromJson)
                  .then(response => response.json())

    },
    getUsersFromDummy: async () =>{
        const res:{users:IUserDummy[]} = await fetch(urls.users.usersFromDummy)
                  .then(response => response.json());
        return res

    }
};

const postService ={
    getPostsFromJson: async ():Promise<IPost[]> =>{
        return  await fetch(urls.posts.postsFromJson)
                  .then(response => response.json())

    },
    getPostsFromDummy: async () =>{
        const res:{posts:IPost[]} = await fetch(urls.posts.postsFromDummy)
            .then(response => response.json());
        return res

    }
};

const commentsService ={
    getCommentsFromJson: async ():Promise<IComment[]> =>{
        return  await fetch(urls.comments.commentsFromJson)
            .then(response => response.json())

    },
    getCommentsFromDummy: async () =>{
        const res:{comments:IComment[]} = await fetch(urls.comments.commentsFromDummy)
            .then(response => response.json());
        return res

    }
};

export { userService, postService, commentsService}