import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';

import Layout from './layout/layout';
import Home from './pages/home/home';
import About from './pages/about/about';
import Plan from './pages/plan/plan';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='plan' element={<Plan />} />
      </Route>
    </Routes>
  );
}

export default App;
