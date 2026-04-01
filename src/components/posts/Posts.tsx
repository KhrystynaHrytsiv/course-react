import {useEffect, useState} from "react";
import type {IPost} from "../../models/IPost.ts";
import {getAll} from "../../service/generalService.ts";
import {Post} from "./Post.tsx";

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getAll<ResponseType & {posts:IPost[]}>('posts').then(({posts}) => setPosts(posts))
    }, []);
    return (
        <div>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </div>
    );
};

export {Posts};