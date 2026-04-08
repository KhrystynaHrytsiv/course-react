import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {userAction} from "../../redux/slices/usersSlice.ts";
import {postActions} from "../../redux/slices/postSlice.ts";
import {commentActions} from "../../redux/slices/commentSlice.ts";
import {User} from "../users/User.tsx";
import {Post} from "../posts/Post.tsx";
import {Comment} from "../comments/Comment.tsx";

const Complex = () => {
    const {userSlice:{users}, postSlice:{posts}, commentSlice:{comments}} = useAppSelector(state => state);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!users.length){
            dispatch(userAction.getUsers())
        }
        if (!posts.length){
            dispatch(postActions.getPosts())
        }
        if (!comments.length){
            dispatch(commentActions.getComments())
        }
    }, []);
    return (
        <div>
            {users.map(user =><User key={user.id} user={user}/>)}
            {posts.map(post => <Post key={post.id} post={post}/>)}
            {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
        </div>
    );
};

export {Complex};