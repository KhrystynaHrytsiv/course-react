import {useEffect, useState} from "react";

export const useFetch = () =>{
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value => setUsers(value))
        return () =>{
            console.log('unsubscribe')
        }
    }, []);
    return users
}