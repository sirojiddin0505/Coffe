import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/navbar/Nav';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Main from '../components/main/Main';
import Section from '../components/section/Section';
import Footer from '../components/footer/Footer';

const Layout = () => {
  return (
    <>
      <Nav />
      <Header />
      <Hero />
      <Main />
      <Section />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
