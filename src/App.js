import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Navbar from './Navbar'
import "./App.css"
import Services from './Services'
import Contact from './Contact'


const App = () => {
  return (
   <Router>

    <Navbar/>
    
    <Routes>

    <Route path='/' element ={ <Home/> } />
    <Route path='/About' element ={ <About/> } />
    <Route path='/Services' element ={ <Services/> } />
    <Route path='/Contact' element ={ <Contact/> } />

    </Routes>

   </Router>
  )
}

export default App
