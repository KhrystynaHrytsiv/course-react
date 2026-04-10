import {Fragment, useCallback} from "react";
import {usePagination} from "./mutations/posts/usePagination.ts";
import {useCreatePost} from "./mutations/posts/useCreatePost.ts";

// const totalPages = 10;

const NewApp = () => {
    // const [pagination, setPagination] = useState<{limit:number, offset:number}>({limit:10, offset:0});
    // const {isFetching, refetch, data:paginatedPosts} = usePagination(pagination);
    const {isFetching, data:paginatedPosts} = usePagination({limit:10, offset:0});
    const {mutateAsync:createPostRequest} = useCreatePost();


    // const handleChangePage = async (offset:number) =>{
    //     setPagination((prevState) =>({...prevState, offset}));
    //     await refetch();
    // }

    // const handleCreatePost = useCallback(async () =>{
    //     try {
    //         const response = await createPostRequest({title: 'Title', body:'lorem', userId: '11'});
    //         if (!response){
    //             return
    //         }
    //         console.log(response);
    //         refetch()
    //     }catch (e) {
    //       console.error(e);
    //       throw e
    //     }
    // }, []);


    const handleCreatePost = useCallback( ///якщо функція виглядатиме так, тоді потрібно додати перевірки в useCreatePost v onSuccess i onError
        async () =>{
            await createPostRequest({title: 'Title', body:'lorem', userId: '11'})
        }, [])

    if (isFetching) return <div>Loading...</div>;
    if (!paginatedPosts) return null
    return (
        <div>
            {paginatedPosts.map(item =><Fragment key={item.id}>
                <div>id: {item.id}</div>
                <div>title:{item.title}</div>
                <div>body: {item.body}</div>
                <div>userId:{item.userId}</div>
            </Fragment>) }
            <button onClick={handleCreatePost}>Create new post</button>
            {/*<div>*/}
            {/*    <button onClick={()=>handleChangePage(0)} disabled={pagination.offset === 0}>First</button>*/}
            {/*    <button onClick={()=>handleChangePage(pagination.offset - pagination.limit)}>Previous</button>*/}
            {/*    <span>Page {pagination.offset / pagination.limit + 1}</span>*/}
            {/*    <button onClick={()=>handleChangePage(pagination.offset + pagination.limit)}*/}
            {/*            disabled={pagination.offset === (totalPages -1) * pagination.limit}>Next</button>*/}
            {/*    <button onClick={()=>handleChangePage((totalPages - 1) * pagination.limit)}*/}
            {/*            disabled={pagination.offset === (totalPages -1) * pagination.limit}>Last</button>*/}
            {/*</div>*/}
        </div>
    );
};

export {NewApp};