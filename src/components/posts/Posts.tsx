import {type FC, useEffect, useState} from "react";
import type {IPost} from "../../model/IPost.ts";
import {postService} from "../../services/api.service.ts";

interface IProp {
    userId:string
}
const Posts:FC<IProp> = ({userId}) => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        if(userId){
            postService.getPostsByUserId(+userId).then(data => setPosts(data))
        }
    }, [userId]);
    return (
        <div>
            {posts.map(post => <div key={post.id}>{post.title}</div>)}
        </div>
    );
};

export {Posts};