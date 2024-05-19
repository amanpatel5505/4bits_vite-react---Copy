import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import Login from './Components/Login/Login'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Carousel/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
      
     
    </>
  )
}

export default App
