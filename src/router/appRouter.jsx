import {createBrowserRouter, Navigate} from "react-router-dom" 
import App from "../App" 
import Signup from "../pages/signup"
import RootPage from "../pages/Admin"
import DashBoard from "../components/admin/DashBoard"
import ClientComponent from "../components/admin/ClientComponent"
import UserComponent from "../components/admin/Users"
import Login from "../pages/Login"
import ErrorBoundary from "../pages/ErrorBoundary"
import HomePage from "../pages/HomePage"



const appRouter = createBrowserRouter([
    {
        path: '/',
        element: (
            //  <ErrorBoundary>
                <App />
            //  </ErrorBoundary>
        ),
        children: [
            {
                path: '/',
                element: <Login />,
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: 'adminHome',
                element: <RootPage />,
                children: [
                    {
                        path: 'dashBoard',
                        element: <DashBoard />,
                    },
                    {
                        path: 'clients',
                        element: <ClientComponent />,
                    },
                    {
                        path: 'users',
                        element: <UserComponent />,
                    },
                    {
                        path:'HomePage',
                        element:<HomePage/>
                    }
                ],
            },
            {
                path: '*',
                element: <Navigate to="/login" replace />,
            },
        ],
    },
]); 

export default appRouter