import type {IUserJson} from "../../interfaces/IUser.ts";
import type {FC} from "react";
import type {IUserDummy} from "../../interfaces/IUserDummy.ts";
interface IProp {
    userJson?:IUserJson,
    userDummy?:IUserDummy
}
const User:FC<IProp> = ({userJson, userDummy}) => {

    return (
        <div>
            {userJson && (<div>{userJson.name}</div>)}
            {userDummy && (<div key={userDummy.id}>{userDummy.firstName} {userDummy.lastName}</div>)}
        </div>
    );
};

export {User};