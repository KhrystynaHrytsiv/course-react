import type IUser from "../interface/IUser.ts";
import type {FC} from "react";

interface IProp {
    user:IUser
}
const User:FC<IProp> = ({user}) => {
    return (
        <div>
            {user.name}
        </div>
    );
};

export {User};