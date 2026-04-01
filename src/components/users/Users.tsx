import {useEffect, useState} from "react";
import {getAll} from "../../service/generalService.ts";
import type {IUser} from "../../models/IUser.ts";
import {User} from "./User.tsx";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        // getAll<ResponseType & {users:IUser[]}>('users').then(value =>setUsers(value.users))
        getAll<ResponseType & {users:IUser[]}>('users').then(({users})=>setUsers(users))
    }, []);
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};