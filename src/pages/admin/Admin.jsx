import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

// Components
import Sidebar from '../../components/sidebar/Sidebar'
import AdminHeader from '../../components/admin-header/AdminHeader'

const Admin = () => {
  const [close, setClose] = useState(false)
  return (
    <>
      <div className={`admin ${close ? "close" : ""}`}>
        <Sidebar/> 
        <div>
          <AdminHeader setClose={setClose}/>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Admin