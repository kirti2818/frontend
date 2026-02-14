import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    chatUser : {},
    messages : []
}

const chatReducer = createSlice({
    name : 'chat_reducer',
    initialState,
    reducers : {
        addChatUser : (state,action)=>{
            state.chatUser = action.payload
        }
    }
})

export default chatReducer.reducer;
export const {addChatUser} = chatReducer.actions