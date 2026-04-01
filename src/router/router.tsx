import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../layout/Layout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";


const router= createBrowserRouter([
    {path: '', element: <Layout/>, children:[
            {index:true, element: <HomePage/>},
            {path:'users', element:<UsersPage/>},
            {path:'posts', element:<PostsPage/>},
        ]}
]);

export {router}