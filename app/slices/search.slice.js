import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchQuery: ''
}

const SearchReducer = createSlice({
    name: "search_reducer",
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload

        }
    }
})


export default SearchReducer.reducer;
export const {setSearchQuery} = SearchReducer.actions