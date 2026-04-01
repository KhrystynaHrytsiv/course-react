import type {IUser} from "../model/IUser.ts";
import {urls} from "../constants/url.ts";


export const userService ={
    getUsers: async ():Promise<IUser[]> =>{
         return await fetch(urls.users.base)
                  .then(response => response.json())

    },
    getUser: async (id:number) =>{
        return await fetch(urls.users.byId(id))
            .then(response => response.json())
    }
}