import {useEffect, useState} from "react";
import type {IComment} from "../../interface/IComment.ts";
import {Comment} from "../comment/Comment.tsx";
import {getComments} from "../../service/api.service.ts";


const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        getComments().then(data => setComments(data))
    }, []);
    return (
        <div className='flex flex-wrap gap-10 justify-around' >
            {comments.map(comment =><Comment comment={comment} key={comment.id}/>)}
        </div>
    );
};

export {Comments};