import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
  let isLogin = localStorage.getItem("x-auth-token") 
  return isLogin ? <Outlet/> : <Navigate replace to="/register"/>
}

export default Auth