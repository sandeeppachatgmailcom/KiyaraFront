import { HiMiniUserCircle } from "react-icons/hi2";
import { MdAlternateEmail } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import useLogin from "../../hooks/useLogin";
import { memo, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useNavigation from "../../hooks/useNavigation";
import { useDispatch, useSelector } from "react-redux";
import { userlogin } from "../../store/userSlice";
// const MemoizedToastContainer = memo(ToastContainer);
const LoginBox = () => {
    const login = useLogin()
    const navigate = useNavigation()
    const dispatch = useDispatch()
    const activeUser = useSelector((state) => state.user.user)
    const [user, setUser] = useState({
        firstname: '',
        email: '',
        password: ''
    })
    useEffect(() => {
        if (Object.keys(activeUser)?.length) navigate('adminHome')
    }, [activeUser])
    const handleChange = (event) => {
        const { name, value } = event.target
        const temp = {
            ...user,
            [name]: value
        }

        setUser(temp)
    }
    const saveData = async () => {
        const result = await login(user)
        if (result?.status) {

            toast.success(result?.message);
            dispatch(userlogin(result))


        }
        else {
            toast.error(result?.message)


        }
    }

    return (
        <div className="w-[90%] border border-gray-400 border-opacity-30 bg-violet-900 bg-opacity-5 rounded-xl flex flex-col justify-start p-3 items-center h-[90%] gap-4">
                
            <HiMiniUserCircle className="w-32 h-[30%] text-violet-800 " />
            {/* <MemoizedToastContainer/> */}


            <div className="gap-4 bg-violet-200 shadow-xl  w-full justify-center items-center h-[50%] rounded-xl flex flex-col ">
                <div className=" lg:h-10 h-20 flex w-[80%] justify-start items-center text-violet-300 bg-violet-800 ">
                    <FaUserEdit className="w-[20%] h-[40%]  " />
                    <input onChange={(e) => handleChange(e)} value={user.firstname} type="text" name="firstname" placeholder="firstname" className=" focus:outline-none  p-1 text-sm border-s h-full w-[80%] bg-transparent" id="" />
                </div>
                <div className=" lg:h-10 h-20 flex w-[80%] text-violet-300 bg-violet-800 justify-start bg-transparent items-center  ">
                    <MdAlternateEmail className="w-[20%] h-[40%]  " />
                    <input onChange={(e) => handleChange(e)} type="email" name="email" placeholder="email" value={user.email} className=" focus:outline-none  p-1 text-sm border-s h-full w-[80%] bg-transparent" id="" />
                </div>
                <div className=" lg:h-10 h-20 flex w-[80%] justify-start text-violet-300 bg-violet-800 items-center ">
                    <RiLockPasswordFill className="w-[20%] h-[40%]  " />
                    <input onChange={(e) => handleChange(e)} type="password" name="password" placeholder="password" value={user.password} className=" focus:outline-none  p-1 text-sm border-s h-full w-[80%] bg-transparent" id="" />
                </div>
            </div>
            <div className="gap-4 w-full lg:h-14 justify-center items-center   rounded-b-xl flex flex-col ">
                <button onClick={saveData} className=" bg-violet-200  rounded-lg w-24 justify-center items-center flex  border  h-10 -z-  ">
                    login
                </button>
            </div>
        </div>
    )
}

export default LoginBox