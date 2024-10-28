import { useEffect, useState } from "react"
import getMyActiveClients from "../utils/getActiveClients"
import { useSelector } from "react-redux"


const useGetActiveClients = () => {
    const user = useSelector((state) => state?.user?.user)
    const [clients, setClients] = useState([])
    const fetchClients = async () => {

        console.log({ clientId: user },user.designation, '{clientId:user.designation}')
        if (user.designation == 'DN10000010') {
            const data = await getMyActiveClients(user?.userId)
             
            setClients(data)
        }
        else if (user.designation == 'DN10000008') {
            
            const tempUser = JSON.parse(JSON.stringify(user)) 

            setClients([tempUser]) 
        }
    }
    useEffect(() => {
        fetchClients()
    }, [])

    useEffect(()=>{
        console.log(clients,user.designation,'asasasasasasasasasa')
    },[clients])
    return clients
}

export default useGetActiveClients