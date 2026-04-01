import {Link, Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            comments page
            <br/>
            <Link to={'jsonplaceholder'}>go to comments jsonplaceholder page</Link>
            <br/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};