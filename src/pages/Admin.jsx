import { Outlet } from "react-router-dom"
import MenuBar from "../components/common/MenuBar"
import { ToastContainer } from "react-toastify"

const AdminPage = ()=>{
    return(
        <div className=" w-full h-[100%] flex flex-col lg:flex-row justify-center items-center ">
            <ToastContainer/>
            <div className=" flex justify-center bg-sky-800 items-center border   w-full lg:w-1/12 rounded-xl  h-[20%]  lg:h-[80%] ">
                <MenuBar/>
            </div>
            <div className="w-full lg:h-[100%] h-[80%]  ">
                <Outlet/>
            </div>
        </div>
    )
}

export default AdminPage