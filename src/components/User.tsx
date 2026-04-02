import type {FC} from "react";
import type {IUser} from "../models/IUser.ts";
import {useNavigate} from "react-router-dom";


interface IProps {
    user:IUser
}

const User: FC<IProps> = ({user}) => {
    const navigate = useNavigate();
    const handleClick =() =>{
        navigate(`${user.id}/carts`)
    }
    return (
        <div>
            <div>{user.id}. {user.firstName}  {user.lastName}</div>
            <button onClick={handleClick}>see carts current user</button>
        </div>
    );
};

export { User };