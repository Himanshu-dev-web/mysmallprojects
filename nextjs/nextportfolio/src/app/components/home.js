import React from 'react'
import Image from 'next/image'
import profilePic from '/Asset/img.jpg'

const Home = () => {
  return (
    <>
        <div className="bg-slate-50 flex flex-col items-center pt-3.5 pb-12 px-16 max-md:px-5">
    
      <form className="mt-12 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col self-stretch my-auto max-md:max-w-full max-md:mt-10">
              <h2 className="text-zinc-800 text-5xl font-bold leading-[72px] max-md:max-w-full max-md:text-4xl" aria-label="About me">
                About me
              </h2>
              <p className="text-zinc-500 text-2xl leading-9 mt-8 max-md:max-w-full" aria-label="About me description">
              Hi, I'm Himanshu Saini

 </p>
 <p>            I'm a frontend developer having 6 Months of experience using React Js,Next Js,Html,Css3,Javascript,tailwind,Bootstrap. Reach out to me!
</p>
              <button className="text-zinc-800 text-lg font-medium leading-7 items-stretch bg-amber-400 justify-center mt-8 px-6 py-2 rounded-lg self-start max-md:px-5" aria-label="Resume button">
                Resume
              </button>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
           
            <Image 
                 src={profilePic}
      alt="Picture of the author"
            />
          </div>
        </div>
      </form>
      <div className="items-stretch self-center flex w-48 max-w-full justify-between gap-5 mt-36 max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c372b60599fe0f3cde796e5f6b4de37e58a03e5956cc0df056efb4398a3a6499?apiKey=45441a0d94114ac98b0f24c88cdc4f23&"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
          alt="Portfolio image"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/feccb8f939c1031147a08ce40d4cc0f4280501eb5ebb264183f6a0bce1349536?apiKey=45441a0d94114ac98b0f24c88cdc4f23&"
          className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden shrink-0 flex-1"
          alt="Portfolio image"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fe77bba5691b5636791c7493bf02db650dab08f03e6b117eda0d3737fa6ab99?apiKey=45441a0d94114ac98b0f24c88cdc4f23&"
          className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden shrink-0 flex-1"
          alt="Portfolio image"
        />
      </div>
      <p className="text-zinc-500 text-base self-center whitespace-nowrap mt-8" aria-label="Footer">
        Madelyn Torff 2021
      </p>
    </div>
    <div>
      
    </div>
    </>
  )
}

export default Home