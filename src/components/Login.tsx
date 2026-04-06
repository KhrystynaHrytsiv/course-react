import {useEffect} from "react";
import {login} from "../services/axios.ts";

const Login = () => {
    useEffect(() => {
        login({username: 'emmaj', password: 'emmajpass', expiresInMins: 1})
    }, []);
    return (
        <div>

        </div>
    );
};

export {Login};