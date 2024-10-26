import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        messages: {
            sent: [{
                    receiverId: "HU100021",
                    message: "You have a text message",
                    senderId: "hr000001"
                }],
            received: [{
                receiverId: "",
                message: "",
                senderId: "",
                read: false
            }]
        },
        messagesToSend: [] // Added initialization for messagesToSend
    },
    reducers: {
        receiveNotification: (state, action) => {
            state.messages.received.push(action.payload);
        },
        sendNotification: (state, action) => {
            state.messages.sent.push(action.payload);
        },
        popNotification: (state) => {
            const temp = state?.messages?.sent.slice(); 
            state.messages.sent = temp.slice(1,temp.length-1) || []; 
        }
    }
});

export const { receiveNotification, sendNotification, popNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
