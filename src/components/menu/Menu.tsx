import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'login'}>login</Link></li>
                <li><Link to={'auth/products'}>auth</Link></li>
            </ul>
        </div>
    );
};

export {Menu};