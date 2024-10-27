import { Outlet } from "react-router-dom"
import MenuBar from "../components/common/MenuBar"
// import { ToastContainer } from "react-toastify"
import useNavigation from "../hooks/useNavigation"
import { memo, useEffect } from "react"
import { useSelector } from "react-redux"
// const MemoizedToastContainer = memo(ToastContainer);

const AdminPage = ()=>{
    const navigation = useNavigation()
    const user = useSelector((state)=>state?.user?.user)
    useEffect(()=>{
      !Object.keys(user).length? navigation('') :''
  },[user])
  
    return(
        <div className=" w-full h-[100%] flex flex-col lg:flex-row justify-center items-center ">
            {/* <MemoizedToastContainer/> */}
            <div className="   flex justify-center bg-sky-800 items-center border   w-full lg:w-1/12 rounded-xl  h-[20%]  lg:h-[80%] ">
                <MenuBar/>
            </div>
            <div className="w-full lg:h-[100%]   h-[80%]  ">
                <Outlet/>
            </div>
        </div>
    )
}

export default AdminPage