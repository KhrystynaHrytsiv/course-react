import {Link, Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            comments page
            <br/>
            <Link to={'jsonplaceholder'}>go to comments jsonplaceholder page</Link>
            <br/>
            <Link to={'dummyjson'}>go to comments dummyjson page</Link>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};