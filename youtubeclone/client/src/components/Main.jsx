import React from 'react'

import Video from '../Pages/Video'
import Home from '../Pages/Home'
import Signin from '../Pages/Signin'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <>
    <div>
    <BrowserRouter>
        <Navbar/>
         <div className="">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/video/:id' element={<Video/>}/>
                <Route path='/signin' element={<Signin/>}/>
            </Routes>
        </div>
        </BrowserRouter>        
        </div>

    </>
  )
}

export default Main