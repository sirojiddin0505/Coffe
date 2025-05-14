import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Plan from './Pages/Plan/Plan';

function App() {
  return (
      <>    
       <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='plan' element={<Plan/>} />
        </Route>
       </Routes>
      </>
  );
}

export default App;