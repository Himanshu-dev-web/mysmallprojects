import { useState } from 'react'
import Search from './components/Search'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Details from './pages/Details'
import Ingredients from './pages/Ingredients'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter >
      <Navbar />
    <Search/>
          <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/details/:name' element={<Details/>} />
            <Route path='/ingredients/:name' element={<Ingredients/>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
