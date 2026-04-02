import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layout/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {UserCartsPage} from "../pages/UserCartsPage.tsx";

export const router = createBrowserRouter([
    {path: '', element:<MainLayout/>, children:[
            {path:'users', element:<UsersPage/>, children:[
                {path:':userId/carts', element:<UserCartsPage/>}
                ]},
        ]}
]);