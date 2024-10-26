import { useDispatch } from "react-redux"
import { popNotification } from "../store/notificationSlice";



const useSendNotification = ()=>{
    const dispatch = useDispatch()
    
    return async function sendNotification (socket,message){
        console.log('object',message)
         await socket.emit("sentNotofication", message);
       // dispatch(popNotification())
    } 
    
    
}

export default useSendNotification