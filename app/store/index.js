import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from '../slices/auth.slice'
import searchReducer from "../slices/search.slice";

const store = configureStore({
    reducer : {
        auth : AuthReducer,
        search : searchReducer
        // user : UserReducer
    }

})

export default store;