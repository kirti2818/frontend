import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    chatUser : null,
    messages : [],
    chatId : null,
    allChats : []
}

const chatReducer = createSlice({
    name : 'chat_reducer',
    initialState,
    reducers : {
        addChatUser : (state,action)=>{
            state.chatUser = action.payload
        },
        setChatId : (state,action)=>{
            state.chatId = action.payload
        },
        setAllChats : (state,action)=>{
            state.allChats = action.payload
        }
    }
})

export default chatReducer.reducer;
export const {addChatUser, setChatId,setAllChats} = chatReducer.actions