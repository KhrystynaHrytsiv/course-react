const baseUrl = 'https://jsonplaceholder.typicode.com';

const urls ={
    users:{
        base: baseUrl + '/users',
        byId:(id:number) => baseUrl + '/users/' + id
    }
}
export {urls}