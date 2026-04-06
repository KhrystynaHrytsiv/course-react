import './App.css'
import {Users} from "./components/Users.tsx";
import {useFetch} from "./hooks/useFetch.tsx";


function App() {
  console.log('app');
  useFetch()
  return (
    <>
      <Users/>
    </>
  )
}

export default App
