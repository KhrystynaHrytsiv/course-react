import {useEffect, useState} from "react";
import type {IPost} from "../../interface/IPost.ts";
import {getPosts} from "../../service/post.service.ts";
import {Post} from "../post/Post.tsx";
import css from './Posts.module.css'

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getPosts().then(data => setPosts(data))
    }, []);
    return (
        <div className={css.container}>
            {posts.map(post =><Post post={post} key={post.id}/>)}
        </div>
    );
};

export {Posts};