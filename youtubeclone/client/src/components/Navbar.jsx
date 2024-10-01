import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div>
      <div className=" pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0"></div>
      <div className= " bg-white">
        <div className=" flex-col flex">
          <div className="fixed w-full border-b-2 border-zinc-800">
            <div className="bg-zinc-800 h-16 justify-between items-center mx-auto px-4 flex">
             <Link to="/">
              <div className='flex justify-center items-center mx-4 cursor-pointer'>
                <img src="https://img.freepik.com/free-icon/youtube_318-566773.jpg"
                  className="block btn- h-8 w-auto" alt="" />
                  <h2 className='text-white text-lg font-medium mx-4'>Utube</h2>
              </div>
              </Link>
              <div className="w-[20rem] lg:block mr-auto ml-40 hidden relative max-w-xs">
                
                <input placeholder="Type to search" type="search" className="border border-gray-300 focus:ring-indigo-600
              focus:border-indigo-600 sm:text-sm w-full rounded-lg pt-2 pb-2 pl-10 px-3 py-2"/>
              
              <p className="px-4 bg-zinc-600 items-center flex absolute inset-y-0 right-0 cursor-pointer hover:bg-zinc-700">
                  <span className=" justify-center items-center flex">
                    <span className="justify-center items-center flex">
                      <span className="items-center justify-center flex">
                        <svg className="w-5 h-5 text-gray-400" fill="none" viewbox="0 0 24 24" stroke="currentColor"
                          stroke-width="2"><path  stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0
                      11-14 0 7 7 0 0114 0z"/></svg>
                      </span>
                    </span>
                  </span>
                </p>
              </div>
              <div className="md:space-x-6 justify-end items-center ml-auto flex space-x-3">
               
                <div className="relative">
                  <p className="pt-1 pr-1 pb-1 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200
                hover:text-gray-900 focus:outline-none hover:bg-gray-100">
                    <span className="justify-center items-center flex">
                      <span className="justify-center items-center flex">
                        <span className="items-center justify-center flex">
                          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24"
                            stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round"
                              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4
                        0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6
                        0H9"/></svg>
                        </span>
                      </span>
                    </span>
                  </p>
                  <p className="px-1.5 py-0.5 font-semibold text-xs items-center bg-indigo-600 text-white rounded-full inline-flex
                absolute -top-px -right-1">2</p>
                </div>
                
                
                <Link to="/signin">
                <div className="justify-center items-center flex relative">

                  <img src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
                    className="object-cover btn- h-9 w-9 rounded-full mr-2 bg-gray-300" alt="" />
                  <p className="font-semibold text-sm text-white">Marrie Currie</p>
                  </div>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div></div>
    </>
  )
}

export default Navbar