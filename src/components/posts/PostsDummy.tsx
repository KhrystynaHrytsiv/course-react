import {useEffect, useState} from "react";
import type {IPost} from "../../interfaces/IPost.ts";
import {postService} from "../../services/api.service.ts";
import {Post} from "./Post.tsx";

const PostsDummy = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        postService.getPostsFromDummy().then(({posts}) => setPosts(posts))
    }, []);
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsDummy};