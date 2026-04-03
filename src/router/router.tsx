import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "../MainLayout.tsx";
import {CarsPage} from "../pages/CarsPage.tsx";

const router = createBrowserRouter([
    {path: '', element:<MainLayout/>, children:[
            {index:true, element: <Navigate to={'cars'}/>},
            {path: 'cars', element:<CarsPage/>}
        ]}
]);
export {router}