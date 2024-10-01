import React from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className=' md:flex mt-[5rem]   items-center  md:flex-row md:justify-center md:flex-wrap'>
      
     <Link to="/video/2345">
        <Card/>
     </Link>
    </div>

    </>
  )
}

export default Home