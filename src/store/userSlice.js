import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            name:'sandeep',
            menuList:{
                dashBoard:{
                        access:true,
                        link:'/adminHome/dashBoard'
                        },
                clients:{
                        access:true,
                        link:'/adminHome/clients',
                        },
                users:{ 
                        access:true,
                        link:'/adminHome/users',
                        } ,
                }
        }
    },
    reducer: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state, action) => {
            state.user = {};
        }
    }
})

export const { login, logout } = userSlice.actions
export default   userSlice.reducer
