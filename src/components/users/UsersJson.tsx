import {useEffect, useState} from "react";
import type {IUserJson} from "../../interfaces/IUser.ts";
import {userService} from "../../services/api.service.ts";
import {User} from "./User.tsx";

const UsersJson = () => {
    const [users, setUsers] = useState<IUserJson[]>([]);
    useEffect(() => {
        userService.getUsersFromJson().then(data => setUsers(data))
    }, []);
    return (
        <div>
            {users.map(user => <User userJson={user} key={user.id}/>)}
        </div>
    );
};

export {UsersJson};