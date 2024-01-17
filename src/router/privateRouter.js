import React from "react";
import { Route, Navigate, Outlet, Routes } from "react-router-dom";

const PrivateRoute =(props) =>{
  const token = localStorage.getItem("token")
  if(token){
    return <props.component/>
  }
  else{
    return <Navigate to="/login" />
  }
}

export default PrivateRoute;
