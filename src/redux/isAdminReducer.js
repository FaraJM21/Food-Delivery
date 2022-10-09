import { createSlice } from "@reduxjs/toolkit";

const isAdminSlice = createSlice({
    name:'isLogedIn',
    initialState:{isAdmin:false},
    reducers:{
        isAdmin:(state, text)=>{
            state.isAdmin = text.payload
        }
    }
})

export const {isAdmin} = isAdminSlice.actions;
export default isAdminSlice.reducer