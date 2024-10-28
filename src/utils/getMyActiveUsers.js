import { userApi } from "../api/api"
import nodeServer from "../api/axios"


const getMyActiveUsers =async (clientId)=>{
   try {
      console.log(clientId,'client list')
     
   const result = await nodeServer.post(userApi.postActiveUserByClient,{clientId:clientId})
    console.log(result?.data?.data,'getMyActiveUsers')
    return result?.data?.data || []
   } catch (error) {
    return []
   }
}

export default getMyActiveUsers