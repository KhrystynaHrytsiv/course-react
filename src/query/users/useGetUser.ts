import {useQuery} from "@tanstack/react-query";

interface IUser {
    id:number,
    name:string
}
export const useGetUser = ({id}:{id:string}) =>{
    return useQuery({queryKey: ['users', id],  queryFn: async ():Promise<IUser> =>{
            return await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(response => response.json())
        },

    })};