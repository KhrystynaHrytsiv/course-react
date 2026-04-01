import {useEffect, useState} from 'react';
import type {IUserDummy} from "../../interfaces/IUserDummy.ts";
import {userService} from "../../services/api.service.ts";
import {User} from "./User.tsx";

const UsersDummy = () => {
    const [users, setUsers] = useState<IUserDummy[]>([]);
    useEffect(() => {
        userService.getUsersFromDummy().then(({users}) => setUsers(users))
    }, []);
    return (
        <div>
            {users.map(user => <User userDummy={user} key={user.id}/>)}
        </div>
    );
};

export {UsersDummy};