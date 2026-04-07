import {apiService} from "./apiService.ts";
import type {IUser} from "../interfaces/IUser.ts";

export const userService ={
    getAllUsers:() => apiService.get<IUser[]>('users'),
    getUser:(id:number) => apiService.get<IUser>('users/'+id)
};