import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {ProductsPage} from "../pages/ProductsPage.tsx";


export const router = createBrowserRouter([
    {path: '', element:<MainLayout/>, children:[
            {path:'login', element:<LoginPage/>},
            {path: 'auth/products', element:<ProductsPage/>}
        ]}
]);