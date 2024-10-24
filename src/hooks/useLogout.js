import { useDispatch } from "react-redux"
import { userlogout } from "../store/userSlice"
import useNavigation from "./useNavigation"



const useLogout=()=>{
    const dispath = useDispatch()
    const navigate = useNavigation()
    return function handlelogout(){
        dispath(userlogout())
        navigate('/login')
    }}

export default useLogout 