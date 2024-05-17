import { IoIosMenu } from "react-icons/io";
import React from 'react'
import {  FaUser } from "react-icons/fa";

const AdminHeader = ({setClose}) => {
  return (
    <div className="admin__header">
          <button onClick={()=> setClose(p => !p)}><IoIosMenu/></button>
          <div>
            <p>John doe</p> <FaUser />
          </div>
      </div>
  )
}

export default AdminHeader