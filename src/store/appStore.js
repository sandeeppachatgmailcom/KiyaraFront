import  {configureStore} from "@reduxjs/toolkit" 
import userSlice from './userSlice'
import notification from './notificationSlice'
const appStore = configureStore({
    reducer:{
        user:userSlice,
        notification:notification
    }
})

export default appStore