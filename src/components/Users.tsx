import {useEffect, useState} from "react";
import type IUser from "../interface/IUser.ts";
import {User} from "./User.tsx";
import {getUsers} from "../services/api.ts";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
       // getUsers().then(res => setUsers(res))
       //  return ()=>{
       //      console.log('done');
       //  }

        const fetchData = async () =>{
            const users = await getUsers();
            setUsers(users);
        }
        fetchData()

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