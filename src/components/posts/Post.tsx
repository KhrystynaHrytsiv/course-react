import type {FC} from "react";
import type {IPost} from "../../interfaces/IPost.ts";

const Post:FC<{post:IPost}> = ({post}) => {
    const {id, title, body} = post;
    return (
        <div>
            <div> id :{id}</div>
            <div> title :{title}</div>
            <div> body :{body}</div>
        </div>
    );
};

export {Post};