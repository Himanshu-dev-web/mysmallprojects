import React from 'react'

const Card = () => {
  return (
    <>

      <div className="w-[20rem]   rounded-lg shadow-md lg:max-w-sm m-4">
            <img
                className="object-cover w-full h-48"
                src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                alt="image"
            />
            <div className='flex flex-col p-4'>
            <div className=" flex items-center">
            <img className="w-8 h-8 mx-2 rounded-full shadow-lg" src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg" alt="Bonnie image"/>
              <div className='flex flex-col'>
                <h4 className="text-sm cursor-pointer  font-medium tracking-tight text-black">
                    React Tailwind Card with Image
                </h4>
                <h4 className='my-1 font-semibold text-xs text-zinc-600' >Freecodecamp</h4>
                <h4 className='font-thin text-xs text-zinc-600' >608,897 views . <span>1 day</span></h4>

                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Card