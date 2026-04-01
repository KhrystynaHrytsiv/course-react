import type {FC} from "react";
import type {IPost} from "../../models/IPost.ts";
interface IProps {
    post:IPost
}

const Post: FC<IProps> = ({post}) => {
    return (
        <div>
            {post.id}. {post.title}
        </div>
    );
};

export { Post };