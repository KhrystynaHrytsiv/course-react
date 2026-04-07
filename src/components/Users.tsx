import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {userAction} from "../redux/slices/usersSlice.ts";

const Users = () => {
    const {users, loadState} = useAppSelector(state => state.users);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userAction.loadUsers())

    }, []);
    return (
        <div>
            {!loadState && <div>Loading</div>}
            {users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export {Users};