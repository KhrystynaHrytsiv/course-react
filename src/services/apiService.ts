import  axios from "axios";
import type {IUser} from "../interfaces/IUser.ts";

const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com/auth',
    headers:{}
});

type LoginData ={
    username:string,
    password:string,
    expiresInMins:number
}

export const login = async ({username, password, expiresInMins}:LoginData)=>{
    const {data:userWithTokens} = await axiosInstance.post<IUser>('/login', {username, password, expiresInMins});
    console.log(userWithTokens);

}