import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "../layout/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {UserCartsPage} from "../pages/UserCartsPage.tsx";

export const router = createBrowserRouter([
    {path: '', element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'users'}/>},
            {path:'users', element:<UsersPage/>},
            {path:'users/:userId/carts', element:<UserCartsPage/>}

        ]}
]);