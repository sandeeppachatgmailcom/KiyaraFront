import { Outlet } from "react-router-dom"
import MenuBar from "../components/common/MenuBar"

const AdminPage = ()=>{
    return(
        <div className=" w-full h-[100%] flex flex-col lg:flex-row justify-center items-center ">
            <div className=" flex justify-center items-center border    w-1/12 rounded-xl overflow-hidden  h-[80%] ">
                <MenuBar/>
            </div>
            <div className="w-full h-[100%]  ">
                <Outlet/>
            </div>
        </div>
    )
}

export default AdminPage