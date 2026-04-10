import './App.css'
import {useGetUsers} from "./query/users/useGetUsers.ts";
// import {useGetUser} from "./query/users/useGetUser.ts";
import {useCreatePost} from "./mutations/posts/useCreatePost.ts";
import {useState} from "react";


function App() {
  const [postTitle, setPostTitle] = useState<string>('');
  const [postBody, setPostBody] = useState<string>('');
const {data:users} = useGetUsers();
// const {data:user, isFetched: isUserLoading, status:userStatus} = useGetUser({id: String(1)});
  // console.log(user, isUserLoading, userStatus);
  console.log({postTitle, postBody});
  const {mutateAsync, data:post} = useCreatePost();
  if (post){
    return (<div>
      <div>{post.id}</div>
      <div>{post.title}</div>
      <div>{post.body}</div>
    </div>)
  }

  const handleClick =async ({userId}:{userId:string})=>{
    try {
      const response = await mutateAsync({userId, title:postTitle, body:postBody});
      if (response) {
        console.log(response)
      return
      }
      console.log('No response');
    }catch (e) {
      console.error(e)
    }
  }
  return (
    <>
      {users?.map(user => <div key={user.id}>{user.id}. {user.name}
        <button onClick={async () =>await handleClick({userId: String(user.id)})}>Create post by userId</button>
      </div>)}
      <input name={'title'}  value={postTitle} onChange={(e)=>setPostTitle(e.target.value)}/>
      <input name={'body'} value={postBody} onChange={(e) => setPostBody(e.target.value)}/>
    </>
  )
}

export default App
