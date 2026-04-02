import type {IRes} from "../models/IRes.ts";

export const getAllUsers = async (pg:string):Promise<IRes>=>{
    return await fetch('https://regrets.in/api/users?page='+ pg)
        .then(response => response.json())
}