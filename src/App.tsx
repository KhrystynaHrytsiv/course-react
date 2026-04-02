import './App.css'
import {Outlet} from "react-router-dom";
import {Pagination} from "./componets/Pagination.tsx";


function App() {

  return (
    <>
      <Outlet/>
      <Pagination/>
    </>
  )
}

export default App
