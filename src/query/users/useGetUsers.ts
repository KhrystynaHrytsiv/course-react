import {useQuery} from "@tanstack/react-query";

interface IUser {
    id:number,
    name:string
}
export const useGetUsers = () =>{
    return useQuery({
        queryKey: ['users'],
        queryFn: async ():Promise<IUser[]> =>{
        return await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
        },
    })
};