import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({

    name :"admin",
    initialState:{
        username:"Admin",
        psw:'adminFood'
    },
    reducers:{
        adminEnter:(state) =>{
            return state
        }
    }
})

export const {adminEnter} = adminSlice.actions;
export default adminSlice.reducer