import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// IMAGES
import SiteLogo from '../../images/site-logo.svg'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { IoLogOutOutline } from 'react-icons/io5'
import { FaRegHeart } from 'react-icons/fa'

const Header = () => {
  let {pathname} = useLocation()
  let isLogin = localStorage.getItem("x-auth-token")


  if(pathname.includes("register") || pathname.includes("admin")){
    return <></>
  }

  const navigate = useNavigate()

  const [menu, setMenu] = useState(false)
  const carts = useSelector(s => s.cart.value)
  const wishlist = useSelector(s => s.heart.value)
  return (
    <header>
        <div className="container">
          <div className="header__content">
            <Link className='header-logo' to={"/"}>
              <img src={SiteLogo} alt="site logo" />
            </Link>
            <ul className={menu ? "show" : ""}>
              <NavLink to={"/"}>Home</NavLink>
              {/* <NavLink to={"users"}>Users</NavLink> */}
              {/* <NavLink to={"plant-care"}>Plant Care</NavLink> */}
              <NavLink to={"contact-us"}>Contact Us</NavLink>
            </ul>
            <div>
              <Link to={"/wishlist"}>
                <FaRegHeart className='heart-icon' />
                <sup>{wishlist.length}</sup>
              </Link>
              <Link to={"/cart"}>
                <RiShoppingCart2Line />
                <sup>{carts.length}</sup>
              </Link>
              <button onClick={() => navigate(isLogin ? "/admin/create-products" : "/register")}>
                <IoLogOutOutline />
                {isLogin ? "Admin" : "Login"}
              </button>
            </div>
            <button onClick={() => setMenu(p => !p)} className='menu-btn'>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
    </header>
  )
}

export default Header