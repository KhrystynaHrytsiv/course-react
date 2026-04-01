const placeholder = 'https://jsonplaceholder.typicode.com/';
const dummy = 'https://dummyjson.com/';
const urls ={
   users:{
       usersFromJson: placeholder + 'users',
       usersFromDummy: dummy + 'users'
   },
    posts:{
       postsFromJson: placeholder + 'posts',
       postsFromDummy: dummy + 'posts'
    },
    comments:{
       commentsFromJson: placeholder + 'comments',
       commentsFromDummy: dummy + 'comments'
    }
}
export {urls}