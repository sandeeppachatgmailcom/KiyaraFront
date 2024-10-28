
import { userApi } from "../api/api"
import nodeServer from "../api/axios"


const getAllActiveClients =async ()=>{
   try {
      
     
   const result = await nodeServer.get(userApi.getActiveClients )
    console.log(result?.data?.data,'getAllActiveClients')
    return result?.data?.data || []
   } catch (error) {
    return ['sas']
   }
}

export default getAllActiveClients