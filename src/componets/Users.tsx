import {useEffect, useState} from "react";
import type IUser from "../model/IUser.ts";
import {getUsers} from "../service/api.ts";
import {User} from "./User.tsx";
import {useSearchParams} from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams({page:'1'});

    useEffect(() => {
        const currentPage = query.get('page') || '1';
        getUsers(currentPage).then(({users}) => setUsers(users))
    }, [query]);
    return (
        <div>
            {users.map(value => <User user={value} key={value.id}/>)}
        </div>
    );
};

export {Users};