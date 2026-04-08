import type {FC} from "react";
import type {IComment} from "../../interfaces/IComment.ts";

const Comment:FC<{comment:IComment}> = ({comment}) => {
    const {id, email, name, body} = comment;
    return (
        <div>
            <div> id: {id}</div>
            <div> name: {name}</div>
            <div> email: {email}</div>
            <div> body: {body}</div>
        </div>
    );
};

export {Comment};