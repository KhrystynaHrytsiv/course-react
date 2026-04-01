import {useEffect, useState} from "react";
import type {IComment} from "../../interfaces/IComment.ts";
import {commentsService} from "../../services/api.service.ts";
import {Comment} from "./Comment.tsx";

const CommentsDummy = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        commentsService.getCommentsFromDummy().then(({comments}) => setComments(comments))
    }, []);
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentsDummy};