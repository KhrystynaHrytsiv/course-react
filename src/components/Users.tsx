import {useEffect} from "react";
import {userAction} from "../redux/slices/usersSlice.ts";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";

const Users = () => {
    const {users} = useAppSelector(state => state.users);
    const dispatch = useAppDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
                  .then(response => response.json())
                  .then(value => {
                      dispatch(userAction.loadUsers(value))
                  })
    }, []);
    return (
        <div>
            {users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export {Users};