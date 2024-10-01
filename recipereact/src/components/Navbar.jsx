import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div>
            
<nav  class="bg-white border-gray-200 dark:bg-gray-900 ">
   
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <Link  to={'/'} class="flex items-center">
            <img src="https://assets.materialup.com/uploads/d2feb47f-3d3c-4b05-8673-a2886e5f6aca/preview" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">GetYourRecipie</span>
        </Link>
       
    </div>
    
</nav>
{/* <nav className="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div class="flex items-center justify-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Company</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Team</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Features</a>
                </li>
            </ul>
        </div>
    </div>
</nav> */}


    </div>
  )
}

export default Navbar