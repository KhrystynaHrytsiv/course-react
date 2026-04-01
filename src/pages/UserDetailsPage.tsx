import {useLocation} from "react-router-dom";
import type {IUser} from "../model/IUser.ts";

const UserDetailsPage = () => {
    const {state} = useLocation();
    const user = state as IUser;
    return (
        <div>
            {user.email}
        </div>
    );
};

export {UserDetailsPage};