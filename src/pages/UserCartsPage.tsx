import {UserCarts} from "../components/UserCarts.tsx";
import {useParams} from "react-router-dom";

const UserCartsPage = () => {
    const {userId} = useParams();
    return (
        <div>
            {userId &&  <UserCarts userId={userId}/>}
        </div>
    );
};

export {UserCartsPage};