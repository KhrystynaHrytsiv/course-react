import './App.css'
import {useEffect} from "react";
import {getAllUsers, saveUser} from "./service/userService.ts";


function App() {
  useEffect(() => {
    getAllUsers().then(value => console.log(value));
    saveUser({id:1, name: 'cfsd', email: 'cdsvc@com'}).then(value => console.log(value))
  }, []);
  return (
    <>

    </>
  )
}

export default App
