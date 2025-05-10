import React from 'react'
import Nav from '../components/navbar/Nav'
import Footer from '../components/footer/Footer'
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
