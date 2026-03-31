import type {IPost} from "../../interface/IPost.ts";
import type {FC} from "react";
import css from './Post.module.css'

interface IProp {
    post:IPost
}

const Post:FC<IProp> = ({post}) => {
    const {id, userId, title, body} = post;
    return (
        <div className={css.post}>
           <div> id: {id}</div>
           <div> userId: {userId}</div>
           <div> title: {title}</div>
           <div> body: {body}</div>
        </div>
    );
};

export {Post};