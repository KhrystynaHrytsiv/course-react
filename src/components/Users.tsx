import {useEffect, useState} from "react";
import type IUser from "../interface/IUser.ts";
import {User} from "./User.tsx";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(res => setUsers(res))
        return ()=>{
            console.log('done');
        }
    }, [ ]);
    return (
        <div>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export {Users};