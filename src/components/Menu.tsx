import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'users'}>users</Link></li>
                <li><Link to={'users/1'}>users 1</Link></li>
                <li><Link to={'posts'}>posts</Link></li>
            </ul>
        </div>
    );
};

export {Menu};