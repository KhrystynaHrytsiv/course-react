import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

interface IProp{
    user:IUser
}
const User:FC<IProp> = ({user}) => {
    return (
        <div>
            {user.firstName} {user.maidenName} {user.lastName}
        </div>
    );
};

export {User};