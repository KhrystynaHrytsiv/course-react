import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {userAction} from "../redux/slices/usersSlice.ts";

const UserPage = () => {
    const {id} = useParams();
    const {user, loadState} = useAppSelector(state => state.users);
    const dispatch = useAppDispatch();
    useEffect(() => {
       if(id) dispatch(userAction.getUser(id))
    }, [id]);
    return (
        <div>
            {!loadState && <div>Loading</div>}
            {user && <div>{user.id} {user.name}</div>}
        </div>
    );
};

export {UserPage};