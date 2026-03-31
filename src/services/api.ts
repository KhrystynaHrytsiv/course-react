import type IUser from "../interface/IUser.ts";
const baseUrl = import.meta.env.VITE_API_URL;

const getUsers = async ():Promise<IUser[]> =>{
    const users = await fetch(baseUrl)
        .then(response => response.json());
    return users
}

const getUser =async (id:string):Promise<IUser> =>{
   return await fetch(baseUrl + '/' + id)
              .then(response => response.json());

}
export {getUsers, getUser}