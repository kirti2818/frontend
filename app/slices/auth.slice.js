import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token : null
}


const AuthReducer = createSlice({
    name : 'auth_reducer',
    initialState,
    reducers : {
        setToken : (state, action) => {
            state.token = action.payload
        }
    }

    
})
export default AuthReducer.reducer
export const {setToken} = AuthReducer.actions