import type {IPost} from "../../interfaces/IPost.ts";
import type {FC} from "react";

interface IProp {
   post:IPost
}
const Post:FC<IProp> = ({post}) => {
    return (
        <div>
            {post.id}. {post.title}
        </div>
    );
};

export {Post};