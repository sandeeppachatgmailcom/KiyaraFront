
import { userApi } from "../api/api"
import nodeServer from "../api/axios"


const getAllActiveUsers =async ()=>{
   try {
      
     
   const result = await nodeServer.get(userApi.getActiveUsers )
    console.log(result?.data?.data,'getActiveUsers')
    return result?.data?.data || []
   } catch (error) {
    return ['sas']
   }
}

export default getAllActiveUsers