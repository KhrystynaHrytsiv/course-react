import {keepPreviousData, useQuery} from "@tanstack/react-query";

interface IPost{
    id:number,
    title:string,
    body:string,
    userId:number
}

export const usePagination = ({limit, offset}:{limit:number, offset:number}) =>{

    return useQuery({
        queryKey:['posts', limit, offset],
        queryFn: async ():Promise<IPost[]> =>{
            return fetch(`https://jsonplaceholder.typicode.com/posts?_start=${offset}&_limit=${limit}`)
                      .then(response => response.json())
        },
        placeholderData:keepPreviousData,
        // refetchInterval: 2000
    })
}