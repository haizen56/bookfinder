import React from 'react'
import Loaderimg from "../../images/loader.svg";
import  './Loader.css';
const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img src={Loaderimg} alt="not found" />
    </div>
  )
}

export default Loader