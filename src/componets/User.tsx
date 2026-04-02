import type { FC,  } from "react";
import type IUser from "../model/IUser.ts";

interface IProps {
    user:IUser
}

const User: FC<IProps> = ({user}) => {
    return (
        <div>
            {user.id}. {user.firstName} {user.lastName}
        </div>
    );
};

export { User };