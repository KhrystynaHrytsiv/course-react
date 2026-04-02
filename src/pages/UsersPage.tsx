import {Users} from "../components/Users.tsx";
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