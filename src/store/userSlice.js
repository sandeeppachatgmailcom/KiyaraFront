import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
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
