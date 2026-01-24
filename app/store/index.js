import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from '../slices/auth.slice'

const store = configureStore({
    reducer : {
        auth : AuthReducer,
        // user : UserReducer
    }

})

export default store;