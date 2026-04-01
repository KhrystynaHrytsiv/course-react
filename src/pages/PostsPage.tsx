import {useParams} from "react-router-dom";
import {Posts} from "../components/posts/Posts.tsx";

const PostsPage = () => {
    const {userId} = useParams();

    return (
        <div>
            {userId && <Posts userId={userId}/>}
        </div>
    );
};

export {PostsPage};