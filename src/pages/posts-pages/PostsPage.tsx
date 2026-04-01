import {Link, Outlet} from "react-router-dom";


const PostsPage = () => {
    return (
        <div>
            posts page
            <br/>
            <Link to={'jsonplaceholder'}>go to posts jsonplaceholder page</Link>
            <br/>
            <Link to={'dummyjson'}>go to posts dummyjson page</Link>
            <br/>
            <Outlet/>
        </div>
    );
};

export {PostsPage};