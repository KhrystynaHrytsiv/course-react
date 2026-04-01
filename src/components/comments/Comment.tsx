import type {IComment} from "../../interfaces/IComment.ts";
import type {FC} from "react";

interface IProps {
    comment:IComment
}

const Comment: FC<IProps> = ({comment}) => {
    return (
        <div style={{marginBottom: 10}}>
            {comment.id}. {comment.body}
        </div>
    );
};

export { Comment };