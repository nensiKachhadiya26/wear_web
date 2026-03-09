import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "../components/LoginPage";
import { SignUp } from "../components/SignUp";
import { AdminSidebar } from "../components/admin/AdminSidebar";
import { UserNavbar } from "../components/user/UserNavbar";
import { SellerNavbar } from "../components/seller/SellerNavbar";
import { ProductList } from "../components/user/ProductList";
import { GetApiDemo1 } from "../components/user/GetApiDemo1";
import { UseEffectDemo } from "../components/user/UseEffectDemo";
import { ResetPassword} from "../components/ResetPassword";


const router = createBrowserRouter([
    {path:'/login' , element:<LoginPage/>},
    {path:'/signup',element:<SignUp/>},
    {path:'/resetpassword',element:<ResetPassword/>},
    {
        path:'/admin', element:<AdminSidebar/>,
        
    },
    {
        path:'/user',element:<UserNavbar/>,
        children:[
            // {path:'prolist', element:<ProductList/>},
            {path:'getapidemo',element:<GetApiDemo1/>},
            {path:'useeffectdemo', element:<UseEffectDemo/>},
        ]
    },
    {
        path:'/seller', element:<SellerNavbar/>,
    },
])

const AppRouter = () =>{
    return <RouterProvider router={router}></RouterProvider>
}


export default AppRouter