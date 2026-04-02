import {Users} from "../components/users/Users.tsx";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <Users/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};