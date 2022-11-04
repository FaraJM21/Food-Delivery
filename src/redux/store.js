import { configureStore } from "@reduxjs/toolkit";
import foods from "./foodsReducer";
import isLoged from "./isLogedInReducer";
import loggedinUser from "./loginReducer";
import users from "./usersReducer";
import window from "./windowWidthReducer";

export const store = configureStore({
  reducer: {
    foods,
    users,
    loggedinUser,
    isLoged,
    window,
  },
});
