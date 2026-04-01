import type {FC} from "react";
import type {IUser} from "../../model/IUser.ts";

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