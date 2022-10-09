import { configureStore } from "@reduxjs/toolkit";
import admin from "./adminReducer";
import offcanvas from "./canvasReducer";
import foods from "./foodsReducer";
import isAdmin from "./isAdminReducer";
import isLoged from "./isLogedInReducer";
import loggedinUser from "./loginReducer";
import users from "./usersReducer";
import window from "./windowWidthReducer";


export const store = configureStore({
  reducer: {
    foods,
    users,
    admin,
    loggedinUser,
    isLoged,
    isAdmin,
    offcanvas,
    window,

  },
});
