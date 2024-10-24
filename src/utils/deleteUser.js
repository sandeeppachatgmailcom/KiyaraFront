import { userApi } from "../api/api";
import nodeServer from "../api/axios";

async function deleteUser(userId) {
    try {
        const { data, statusText } = await nodeServer.post(userApi.deleteUser, { userId });

        if (data) {
            return { ...data };
        } else {
            return { status: false, message: statusText };
        }
    } catch (error) {
        
        console.error('Error toggling user status:', error);

        
        return {
            status: false,
            message: error.response?.data?.message || error.message || 'An unknown error occurred',
        };
    }
}

export default deleteUser;
