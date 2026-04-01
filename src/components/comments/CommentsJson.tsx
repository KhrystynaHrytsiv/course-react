import {useEffect, useState} from "react";
import type {IComment} from "../../interfaces/IComment.ts";
import {commentsService} from "../../services/api.service.ts";
import {Comment} from "./Comment.tsx";


const CommentsJson = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        commentsService.getCommentsFromJson().then(data => setComments(data))
    }, []);
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentsJson};