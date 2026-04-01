import type {FC} from "react";
import type {IUser} from "../../model/IUser.ts";
import {Link, useNavigate} from "react-router-dom";

interface IProp {
    user:IUser
}
const User:FC<IProp> = ({user}) => {
    const navigate = useNavigate();
    const handleOnClick = () =>{
        navigate('details', {state: user})
    }
    return (
        <div>
         <Link to={'details'} state={user}>{user.name}</Link>
            <button onClick={handleOnClick}>go to details</button>
        </div>
    );
};

export {User};