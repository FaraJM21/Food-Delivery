import { createSlice } from "@reduxjs/toolkit";

const windowSlice = createSlice({
  name:'windowWidth',
  initialState:{value:0},
  reducers:{
    getWidth:(state, width) =>{
      state.value = width.payload
    }
  }
})

export const  {getWidth} = windowSlice.actions
export default windowSlice.reducer