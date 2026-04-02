import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {userService} from "../../service/api.service.ts";
import {User} from "./User.tsx";
import './Users.css'

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.users))
    }, []);
    return (
        <div className={'usersContainer'}>
            {users.map(user => <User user={user} key={user.id}/>)}
        </div>
    );
};

export {Users};