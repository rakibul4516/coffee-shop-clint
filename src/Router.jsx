import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Layout/Home";
import Update from "./Layout/Update";
import CreatePost from "./Layout/CreatePost";
import SignUp from "./Layout/SignUp";
import SignIn from "./Layout/SignIn";
import ViewUser from "./Layout/ViewUser";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement:<div>Page not found </div>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader :()=> fetch('https://coffe-shop-server-363kvtyom-rakibul-islams-projects.vercel.app/coffees'),
            },
            {
                path:'/update/:id',
                element:<Update></Update>,
                loader:({params})=>fetch(`https://coffe-shop-server-363kvtyom-rakibul-islams-projects.vercel.app/coffees/${params.id}`)
            },
            {
                path:'/create',
                element:<CreatePost></CreatePost>,
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>,
            },
            {
                path:'/signin',
                element:<SignIn></SignIn>,
            },
            {
                path:'/users',
                element:<ViewUser></ViewUser>,
                loader :()=> fetch('https://coffe-shop-server-363kvtyom-rakibul-islams-projects.vercel.app/users'),
            },
        ]
    }
])

export default routes;