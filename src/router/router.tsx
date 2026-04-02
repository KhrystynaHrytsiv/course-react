import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "../App.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";

const router = createBrowserRouter([
    {path: '', element:<App/>, children:[
            {index:true, element:<Navigate to={'users'}/>},
            {path:'users', element:<UsersPage/>}
        ]}
]);
export {router}