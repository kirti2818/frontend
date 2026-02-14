import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from '../slices/auth.slice'
import searchReducer from "../slices/search.slice";
import chatReducer from "../slices/chat.slice"

const store = configureStore({
    reducer : {
        auth : AuthReducer,
        search : searchReducer,
        chat : chatReducer
        // user : UserReducer
    }

})

export default store;