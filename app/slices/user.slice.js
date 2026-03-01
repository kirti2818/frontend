import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userDetail: null
}

const UserReducer = createSlice({
    name: 'user_slice',
    initialState,
    reducers: {
        setUserDetail : (state,action)=>{
            state.userDetail = action.payload
        }

    }

}) 

export const {setUserDetail} = UserReducer.actions
export default UserReducer.reducer