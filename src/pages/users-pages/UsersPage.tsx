import {Link, Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            Users page
            <br/>
            <Link to={'jsonplaceholder'} >go to users jsonplaceholder page</Link>
            <br/>
            <Link to={'dummyjson'}>go to users dummyjson page</Link>
            <Outlet/>
        </div>
    );
};

export {UsersPage};