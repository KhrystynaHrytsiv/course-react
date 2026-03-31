import type {IPost} from "../interface/IPost.ts";

const getPosts = async ():Promise<IPost[]> =>{
    return await fetch(import.meta.env.VITE_API_URL)
              .then(response => response.json())

}
export {getPosts}