import React from 'react'
import './Header.css'
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";



const Header = () => {
  return (
     <div className='holder'>
      <header>
        <Navbar />
        <div className="header_content flex flex-c text-center text-white ">
          <h2 className='header-title text-capitalize'> Find your book of your choice.</h2> <br/>
          <p className="header_text fs-18 fw-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nesciunt blanditiis magnam dicta quisquam minima illum consequuntur expedita at ad labore eveniet impedit cum debitis!</p>
          <SearchForm />
          
        </div>
      </header>
      
    </div>
  )
}

export default Header