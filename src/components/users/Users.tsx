import {useEffect, useState} from "react";

import {User} from "./User.tsx";
import type {IUser} from "../../model/IUser.ts";
import {userService} from "../../services/api.service.ts";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        userService.getUsers().then(value => setUsers(value))
    }, []);
    return (
        <div>
            {users.map(user => <User user={user} key={user.id}/>)}
        </div>
    );
};

export {Users};