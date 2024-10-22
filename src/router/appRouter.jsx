import {createBrowserRouter} from "react-router-dom" 
import App from "../App" 
import Signup from "../pages/signup"
import AdminPage from "../pages/Admin"
import DashBoard from "../components/admin/DashBoard"
import ClientComponent from "../components/admin/ClientComponent"
import UserComponent from "../components/admin/Users"



const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Signup/>
                
            },
            {
                path:'adminHome',
                element:<AdminPage/>,
                children:[
                    {
                        path:'dashBoard',
                        element:<DashBoard/>
                    },
                    {
                        path:'clients',
                        element:<ClientComponent/>
                    },
                    {
                        path:'users',
                        element:<UserComponent/>
                    }
                ]
            }
        ]    
    }
])

export default appRouter