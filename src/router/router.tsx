import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../lyaouts/MainLayout.tsx";
import {UsersPage} from "../pages/users-pages/UsersPage.tsx";
import {PostsPage} from "../pages/posts-pages/PostsPage.tsx";
import {CommentsPage} from "../pages/comments-pages/CommentsPage.tsx";
import {UsersPlaceholderPage} from "../pages/users-pages/UsersPlaceholderPage.tsx";
import {UsersDummyPage} from "../pages/users-pages/UsersDummyPage.tsx";
import {PostsPlaceholderPage} from "../pages/posts-pages/PostsPlaceholderPage.tsx";
import {PostsDummyPage} from "../pages/posts-pages/PostsDummyPage.tsx";
import {CommentsPlaceholderPage} from "../pages/comments-pages/CommentsPlaceholderPage.tsx";
import {CommentsDummyPage} from "../pages/comments-pages/CommentsDummyPage.tsx";

const router = createBrowserRouter([
    {path: '', element:<MainLayout/>, children:[
            {path:'users', element: <UsersPage/>, children:[
                    {path: 'jsonplaceholder', element:<UsersPlaceholderPage/> },
                    {path: 'dummyjson', element:<UsersDummyPage/> },
                ]},
            {path:'posts', element: <PostsPage/>, children:[
                    {path: 'jsonplaceholder', element:<PostsPlaceholderPage/> },
                    {path: 'dummyjson', element: <PostsDummyPage/>},
                ]},
            {path:'comments', element: <CommentsPage/>, children:[
                {path: 'jsonplaceholder', element:<CommentsPlaceholderPage/> },
                    {path: 'dummyjson', element: <CommentsDummyPage/>}
                ]},

        ]}
]);

export {router}