import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {postActions} from "../../redux/slices/postSlice.ts";
import {Post} from "./Post.tsx";

const Posts = () => {
    const {posts} = useAppSelector(state => state.postSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(postActions.getPosts())
    }, []);
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};