import React from 'react'
import './App.css'

import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/home'
import About from './pages/about/About'
import Plan from './pages/plan/plan'
import Layout from './layout/layout'


function App() {
  return (
    <>    
    <BrowserRouter>
       <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About />} />
          <Route path='plan' element={<Plan />} />
        </Route>
       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;