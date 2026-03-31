import {useEffect, useState} from "react";
import type IUser from "../interface/IUser.ts";
import {User} from "./User.tsx";
import {getUsers} from "../services/api.ts";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [item, setItem] = useState<IUser| null>(null);
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

    const upp = (item:IUser) =>{
        setItem(item)
    }
    return (
        <div>
            {item && <div>{JSON.stringify(item)}</div>}
            {users.map(value => <User key={value.id} user={value} upp={upp}/>)}
        </div>
    );
};

export {Users};