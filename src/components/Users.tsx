import {User} from "./User.tsx";
import {useEffect, useState} from "react";

const Users = () => {
    const [users, setUsers] = useState([]);
    console.log('users');
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value => setUsers(value))
        return console.log('unsubscribe')
    }, []);
    return (
        <div>
            users
            <User/>
        </div>
    );
};

export {Users};