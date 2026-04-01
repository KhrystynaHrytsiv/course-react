import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <Link to={'users'}>see users</Link>
            <br/>
            <Link to={'posts'}>see posts</Link>

        </div>
    );
};

export {Menu};