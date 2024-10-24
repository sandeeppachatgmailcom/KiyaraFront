
import { userApi } from "../api/api"
import nodeServer from "../api/axios"
import sanitizeBody from "../utils/sanitize"

const login = async (userData) => {
    try {
        const pureData = await sanitizeBody(userData)
        
        if (pureData.status) {
            const result = await nodeServer.post(userApi.login, { ...pureData.sanitizedData })  
            console.log(result,'*********')
             
            if (result.data) {
                return result.data
            }
            else {
                return {
                    status: false, message: 'no responce from the server '
                }
            }
        }
        else {
            return {
                status: false, message: 'no responce from the server '
            }
        }
    } catch (error) {

    }
}


function useLogin() {
return login

}
export default useLogin