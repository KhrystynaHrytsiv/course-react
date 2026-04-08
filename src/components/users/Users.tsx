import {useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {userAction} from "../../redux/slices/usersSlice.ts";
import {User} from "./User.tsx";

const Users = () => {
    const {users} = useAppSelector(state => state.userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userAction.getUsers())

    }, []);
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};