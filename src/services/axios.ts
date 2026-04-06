import axios from "axios";
import {takeTokens} from "./takeTokens.ts";
import type {IUser} from "../interfaces/IUser.ts";
import type IProduct from "../interfaces/IProduct.ts";
import type {IRes} from "../interfaces/IRes.ts";
import type {ITokens} from "../interfaces/ITokens.ts";


type LoginData ={
    username:string,
    password:string,
    expiresInMins:number
}
const axiosService = axios.create({baseURL:'https://dummyjson.com/auth'});

axiosService.interceptors.request.use((request) =>{
    if (request.method?.toUpperCase() === 'GET'){
        request.headers.Authorization = 'Bearer ' + takeTokens<IUser>('user').accessToken
    }
    return request
})

const login = async ({username, password,expiresInMins }:LoginData):Promise<IUser> => {
    const {data} = await axiosService.post<IUser>('/login', {username, password, expiresInMins});
    localStorage.setItem('user', JSON.stringify(data))
    return data
}

const getProducts = async ():Promise<IProduct[]> =>{
    const {data:{products}} = await axiosService.get<IRes>('/products');
    return  products
};

const refresh = async () =>{
    const userWithToken = takeTokens<IUser>('user');
    const {data:{accessToken, refreshToken}} = await axiosService.post<ITokens>('/refresh', {refreshToken: userWithToken.refreshToken, expiresInMins:1});
    userWithToken.accessToken = accessToken;
    userWithToken.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(userWithToken))
}

export {login, getProducts, refresh}