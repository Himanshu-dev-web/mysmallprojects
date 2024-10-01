import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import './App.css'
import Trending from './components/Trending'

function App() {

  return (
    <div className="App">
         <BrowserRouter >
      <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}  />
           <Route path='/details/:id' element={<Details/>} /> 
           <Route path='/genres/:id' element={<Trending/>} /> 
           <Route path='/search/:name' element={<Trending/>} /> 
           <Route path='/nowplaying/:Currentlyplaying' element={<Trending/>} /> 
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
