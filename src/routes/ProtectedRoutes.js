import React from 'react'
import {  useSelector } from "react-redux";
import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoutes() {

    let isAdmin = useSelector(state => state.isAdmin.isAdmin)
    
   return isAdmin ? <Navigate to="/"/>:<Outlet/>
}

export default ProtectedRoutes;