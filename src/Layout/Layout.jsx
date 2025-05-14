import React from 'react'
import Nav from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Nav/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout
