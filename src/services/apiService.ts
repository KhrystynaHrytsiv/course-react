import  axios from "axios";
import type {IUser} from "../interfaces/IUser.ts";
import type IProduct from "../interfaces/IProduct.ts";
import type {IRes} from "../interfaces/IRes.ts";
import {retriveLocalStorage} from "./helpers.ts";
import type {ITokens} from "../interfaces/ITokens.ts";

type LoginData ={
    username:string,
    password:string,
    expiresInMins:number
}
const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com/auth',
    headers:{}
});

//метод який перехоплює запит перевіряє чи запит створений методом GET, якщо так, то додає в headers ключ Authorization та присвоює значення accessToken взятого з лс за ключем 'user' і повертає запит
axiosInstance.interceptors.request.use((req) =>{
    if (req.method?.toUpperCase() === 'GET'){
        req.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUser>('user').accessToken//важливо щоб після Bearer був пробіл
    }
    return req
})

export const login = async ({username, password, expiresInMins}:LoginData):Promise<IUser>=>{
    const {data:userWithTokens} = await axiosInstance.post<IUser>('/login', {username, password, expiresInMins});//відправдяються дані на сервер для отримання користувача з токенами
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));//записується відповідь з токенами в лс
    return userWithTokens // повертаються дані
}

export const  loadAuthProducts = async ():Promise<IProduct[]> =>{
     const {data:{products}} = await axiosInstance.get<IRes>('/products');//фунція яка дістає продукти
     return products
}

export const refresh = async () =>{
    const userWithToken = retriveLocalStorage<IUser>('user'); // дістаємо користувача з локалстораджу
    const {data:{accessToken, refreshToken}} = await axiosInstance.post<ITokens>('/refresh', {
        refreshToken: userWithToken.refreshToken, expiresInMin: 1}); // відправляється refreshToken на оновлення токенів та дістаються токени
    userWithToken.accessToken = accessToken;
    userWithToken.refreshToken = refreshToken; //переприсвоюються нові значення токенів
    localStorage.setItem('user', JSON.stringify(userWithToken))//токени користувача відправляються назад на лс
}