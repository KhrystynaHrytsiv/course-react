import type {ITodo} from "../interface/ITodo.ts";

const getTodos = async ():Promise<ITodo[]> =>{
    return await fetch(import.meta.env.VITE_API_URL)
              .then(response => response.json())

}
export {getTodos}