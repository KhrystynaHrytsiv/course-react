import type {FC} from "react";
import type {IUser} from "../../interfaces/IUser.ts";

const User:FC<{user:IUser}> = ({user}) => {

    return (
        <div>
            {user.name}
        </div>
    );
};

export {User};