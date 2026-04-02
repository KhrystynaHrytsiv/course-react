import type {IRes} from "../model/IRes.ts";

const baseUrl = import.meta.env.VITE_BASE_URL;
 export const getUsers = async (page:string):Promise<IRes> =>{
     const limit = 30
     const skip = limit * (+page) - limit;
    const res = await fetch(baseUrl + '?skip=' + skip)
              .then(response => response.json());
    return res

}