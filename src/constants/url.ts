const baseUrl = 'https://jsonplaceholder.typicode.com';

const urls ={
    users:{
        base: baseUrl + '/users',
        byId:(id:number) => baseUrl + '/users/' + id
    },
    posts:{
        base: baseUrl + '/posts',
        userPostsById: (id:number) => baseUrl + '/posts?userId=' + id

    }
}
export {urls}