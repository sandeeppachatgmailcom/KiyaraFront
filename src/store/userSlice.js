import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            name: 'sandeep',
            menuList: {
                dashBoard: {
                    access: true,
                    link: '/adminHome/dashBoard',
                },
                clients: {
                    access: true,
                    link: '/adminHome/clients',
                },
                users: { 
                    access: true,
                    link: '/adminHome/users',
                },
            },
        },
    },
    reducers: {   
        userlogin: (state, action) => {
            state.user = action.payload;
        },
        userlogout: (state) => {
            state.user = {};
        },
    },
});

export const { userlogin, userlogout } = userSlice.actions;
export default userSlice.reducer;
