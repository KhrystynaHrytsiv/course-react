import {MutationCache, QueryCache, QueryClient} from "@tanstack/react-query";

export const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onSuccess:(data, query)=>{
            console.log({data, query});
        }
    }),
    mutationCache: new MutationCache({
        onSuccess:(data)=>{
            console.log({data});
        }
    }),
    defaultOptions:{
        queries:{refetchOnWindowFocus:true}
    }
})