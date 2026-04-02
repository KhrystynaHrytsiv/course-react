import  axios from "axios";
import type {IUser} from "../interfaces/IUser.ts";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{'Content-Type':'application/json'}
});

export const getAllUsers = async ():Promise<IUser[]> =>{
    const {data} = await axiosInstance.get<IUser[]>('/users');
    return data
}

export const saveUser = async (user:IUser):Promise<IUser> =>{
    const {data} = await axiosInstance.post<IUser>('/users', user);
    return data
}
axiosInstance.interceptors.request.use((req) =>{
    console.log(req);
    req.headers.set('xxx', 'xxxxx')
    console.log(req.method);
    return req
});
axiosInstance.interceptors.response.use((res) =>{
    console.log(res);
    return res
})