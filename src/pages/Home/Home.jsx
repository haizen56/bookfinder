import React from 'react'
import "../../pages/Home/Home.css"
import Header from "../../Components/Header/Header";
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
const Home = () => {
  return (
    <div>
      
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>


    </div>
  )
}

export default Home