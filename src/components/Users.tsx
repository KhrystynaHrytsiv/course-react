import {User} from "./User.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";

const Users = () => {
    const [users, setUsers] = useState([]);
    console.log('users');


    const arr:number[] = useMemo(() =>{
        return [11, 22, 33]
    }, []);

    const foo = useCallback(() =>{
        console.log('test')
    }, [])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value => setUsers(value))
        return () =>{
            console.log('unsubscribe')
        }
    }, []);
    return (
        <div>
            users
            <User foo={foo} arr={arr}/>
        </div>
    );
};

export {Users};