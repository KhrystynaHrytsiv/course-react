import type IUser from "../interface/IUser.ts";
import type {FC} from "react";

interface IProp {
    user:IUser,
    upp:(item:IUser) =>void
}
const User:FC<IProp> = ({user, upp}) => {
    return (
        <div>
            <div>{user.name}</div>
            <button onClick={()=>{
                upp(user)}}>details</button>
        </div>
    );
};

export {User};