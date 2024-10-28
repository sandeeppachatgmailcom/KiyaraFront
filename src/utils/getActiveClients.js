 
import { userApi } from "../api/api"
import nodeServer from "../api/axios"


const getMyActiveClients =async (clientId)=>{
   try {
      console.log(clientId,'client list')
     
   const result = await nodeServer.post(userApi.postActiveClientsByClient,{clientId:clientId})
    console.log(result?.data?.data,'getMyActiveClients')
    return result?.data?.data || []
   } catch (error) {
    return []
   }
}

export default getMyActiveClients