import type {IComment} from "../interface/IComment.ts";

const getComments = async ():Promise<IComment[]> =>{
    return await fetch(import.meta.env.VITE_API_URL)
              .then(response => response.json())

}
export {getComments}