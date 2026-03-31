import type {IComment} from "../../interface/IComment.ts";
import type {FC} from "react";


interface IProp {
    comment:IComment
}

const Comment:FC<IProp> = ({comment}) => {
    const {id, postId, name, email, body} = comment;
    return (
        <div className='w-1/3  border-2 border-gray-300 bg-gray-200 p-2'>
           <div> id: {id}</div>
           <div> postId: {postId}</div>
           <div> email: {email}</div>
           <div> name: {name}</div>
           <div> body: {body}</div>
        </div>
    );
};

export {Comment};