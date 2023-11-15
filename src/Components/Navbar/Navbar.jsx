import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logoImg from "../../images/book-logo-2.png"

import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);


  return (
    <div>
      <nav className='navbar' id='navbar'>
        <div className="container navbar-content flex">
          <div className="brand-and-toggler  flex flex-sb">
            <Link to="/" className='navbar-brand flex'>
              <img src={logoImg} alt="not found" />
              {/* <span className='text-uppercase fw -7 fs-24 ls-1'>
                BookFinder
              </span> */}
            </Link>
            {/* <div > <span className='nav-span'>Search</span> Your Fav Books</div> */}
            <button type='button' className='navbar-toggler-btn' onClick={handleNavbar}>
              <HiOutlineMenuAlt3 size={35} style={{
                color: `${toggleMenu ? "#fff" : "#010101"}`
               

              }} />
            </button>
          </div>
          <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>

            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to="book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to="about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'> 
                About
                </Link>
                
              </li>
              <li className='nav-item'>
                <Link to="register" className='nav-R text-uppercase text-white fs-22 fw-6 ls-1'> 
                Register 
                </Link>
                
              </li>
            </ul>
          </div>

        </div>

      </nav>

    </div>
  )
}

export default Navbar