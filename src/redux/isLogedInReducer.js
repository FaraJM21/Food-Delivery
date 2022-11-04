import { createSlice } from "@reduxjs/toolkit";

const islogedSlice = createSlice({
    name:'isLogedIn',
    initialState:{isLoged:false},
    reducers:{
        isLoged:(state, text)=>{
            state.isLoged = text.payload
        }
    }
})

export const {isLoged} = islogedSlice.actions;
export default islogedSlice.reducer