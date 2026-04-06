import {User} from "./User.tsx";
import {useCallback, useMemo} from "react";
import {useFetch} from "../hooks/useFetch.tsx";

const Users = () => {
    console.log('users');
    const users = useFetch();
    const arr:number[] = useMemo(() =>{
        return [11, 22, 33]
    }, []);

    const foo = useCallback(() =>{
        console.log('test')
    }, [])

    return (
        <div>
            {users.map(user =><User foo={foo} arr={arr} user={user}/>)}

        </div>
    );
};

export {Users};