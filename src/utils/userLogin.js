import { userApi } from "../api/api"
import nodeServer from "../api/axios"

const userLogin = async (email,password)=>{
    try {
        const login = await nodeServer.post(userApi.login,{email,password})
        console.log(login.data)
        return login.data
    } catch (error) {
        return ({status:false,message: error ||'wrong credential'})
        
    }

}
module.exports = userLogin