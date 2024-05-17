import React, {memo} from 'react'
import {  Link, NavLink, useNavigate } from 'react-router-dom'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { FaChevronCircleLeft } from "react-icons/fa";
import { RiLogoutBoxLine } from 'react-icons/ri';
import { MdOutlineManageAccounts, MdOutlineManageHistory } from 'react-icons/md';
import { FiUserPlus } from 'react-icons/fi';
import { LuUserCog } from 'react-icons/lu';

const Sidebar = () => {
    const navigate = useNavigate()
    const handleLogOut = ()=>{
      if (confirm("Are you sure?")) {
        localStorage.clear();
        navigate("/");
      }
    }
  return (
    <div className='sidebar'>
        
        <h2 className='sidebar__logo'>
          <Link to={"/"}><FaArrowAltCircleLeft/></Link>
          <span>Dashboard</span>
        </h2>
        <ul className="sidebar__collection">
          <li className="sidebar__item">
            <NavLink className={"sidebar__link"} to={"create-products"}>
              <IoCreateOutline />
              <span>Create Products</span>
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink className={"sidebar__link"} to={"manage-products"}>
              <MdOutlineManageHistory />
              <span>Manage Products</span>
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink className={"sidebar__link"} to={"create-users"}>
              <FiUserPlus />
              <span>Create Users</span>
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink className={"sidebar__link"} to={"manage-users"}>
            <LuUserCog />
              <span>Manage Users</span>
            </NavLink>
          </li>
        </ul>
        <div className='sidebar__item'>
          <button className='sidebar__link' onClick={handleLogOut}>
          <RiLogoutBoxLine />
            Log out
          </button>
        </div>
    </div>
  )
}

export default memo(Sidebar)