import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {commentActions} from "../../redux/slices/commentSlice.ts";
import {Comment} from "./Comment.tsx";

const Comments = () => {
    const {comments} = useAppSelector(state => state.commentSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(commentActions.getComments())
    }, []);
    return (
        <div>
            {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
        </div>
    );
};

export {Comments};