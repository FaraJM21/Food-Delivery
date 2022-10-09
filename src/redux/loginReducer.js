import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loggedInUser",
  initialState:{value:''},
  reducers: {
    setUserUsername: (state, username) => {
      state.value = username.payload
    },
  },
});

export const {setUserUsername} = loginSlice.actions
export default loginSlice.reducer