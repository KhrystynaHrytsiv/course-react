import {useMutation, useQueryClient} from "@tanstack/react-query";

interface RequestProp{
    title:string,
    body:string,
    userId:string,
    error?:string
}
// interface Response extends Omit<RequestProp, 'userId'>{
//     id:number,
//     userId:number
// }
interface Response extends RequestProp{
    id:number,
}
export const useCreatePost = () =>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({title, body, userId}:RequestProp):Promise<Response> =>{
            const post = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({title, body, userId}),
            })
                .then((response) => response.json());
            return post;
        },
        onSuccess: async (data) =>{
           if (data && !data.error){
               await queryClient.refetchQueries({queryKey:['posts', 5, 0]})
           }
        },
        onError:(error) =>{
            console.log(error);
            throw error
        },
        retry:false
    })
}