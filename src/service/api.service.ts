import type {IUser} from "../models/IUser.ts";
import type {ICart} from "../models/ICart.ts";

const baseUrl = import.meta.env.VITE_BASE_URL;
export const userService = {
    getUsers: async () => {
         const res:{users:IUser[]} =await fetch(`${baseUrl}/users`)
            .then(response => response.json());
         return res

    },
    getCartsByUserId: async (userId:number) =>{
        const res:{carts:ICart[]} = await fetch(`${baseUrl}/carts/user/${userId}`)
                  .then(response => response.json());
        return res
    }
}