import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/a'}>page a</Link></li>
                <li><Link to={'/b'}>page b</Link></li>
            </ul>
        </div>
    );
};

export {Menu};