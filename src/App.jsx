import React from 'react'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Plan from './pages/Plan'
import Layout from './layout/layout'


function App() {
  return (
      <>    
       <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='plan' element={<Plan />} />
        </Route>
       </Routes>
      </>
  );
}

export default App;