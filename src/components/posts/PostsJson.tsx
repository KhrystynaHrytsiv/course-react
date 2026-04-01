import {useEffect, useState} from "react";
import type {IPost} from "../../interfaces/IPost.ts";
import {postService} from "../../services/api.service.ts";
import {Post} from "./Post.tsx";

const PostsJson = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        postService.getPostsFromJson().then(data => setPosts(data))
    }, []);
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsJson};