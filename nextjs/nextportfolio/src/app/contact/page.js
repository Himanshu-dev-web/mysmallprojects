import React from 'react'

const contact = () => {
  return (
    <>
       <form className="flex flex-col items-center">
      <header className="text-zinc-800 text-center text-5xl font-bold leading-[72px] max-md:text-4xl">
        Contact Me!
      </header>
      <hr className="bg-amber-400 w-[100px] shrink-0 h-1 mt-1 rounded-sm" />
      <label htmlFor="name" className="text-zinc-800 text-base font-semibold mt-20 max-md:mt-10">
        Name
      </label>
      <div className="border bg-white flex w-[400px] shrink-0 max-w-full h-10 flex-col mt-3.5 rounded-lg border-solid border-slate-200">
        <input
          type="text"
          id="name"
          aria-label="Name"
          aria-role="input"
          className="w-full h-full outline-none"
        />
      </div>
      <label htmlFor="email" className="text-zinc-800 text-base font-semibold mt-7">
        Email
      </label>
      <div className="border bg-white flex w-[400px] shrink-0 max-w-full h-10 flex-col mt-3.5 rounded-lg border-solid border-slate-200">
        <input
          type="email"
          id="email"
          aria-label="Email"
          aria-role="input"
          className="w-full h-full outline-none"
        />
      </div>
      <label htmlFor="message" className="text-zinc-800 text-base font-semibold mt-7">
        Message
      </label>
      <div className="border bg-white flex w-[400px] shrink-0 max-w-full h-40 flex-col mt-3 rounded-lg border-solid border-slate-200">
        <textarea
          id="message"
          aria-label="Message"
          aria-role="input"
          className="w-full h-full outline-none"
        ></textarea>
      </div>
      <button className="text-zinc-800 text-lg font-medium leading-7 items-stretch bg-amber-400 justify-center ml-40 mt-6 px-6 py-2 rounded-lg max-md:px-5">
        Send
      </button>
      <div className="items-stretch flex w-48 max-w-full justify-between gap-5 mt-14 px-5 max-md:mt-10">
        <a
          href="https://cdn.builder.io/api/v1/image/assets/TEMP/9562ea0c7d9ceb49a5c0d89ffe0968bdac62dcb7ae6a5a5cf401570562f44662?apiKey=45441a0d94114ac98b0f24c88cdc4f23&"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
          aria-label="Image 1"
          aria-role="link"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9562ea0c7d9ceb49a5c0d89ffe0968bdac62dcb7ae6a5a5cf401570562f44662?apiKey=45441a0d94114ac98b0f24c88cdc4f23&"
            className="w-full"
            alt=""
          />
        </a>
        <a
          href="https://cdn.builder.io/api/v1/image/assets/TEMP/7e242d6642f50c947cffe23200381f5374743c12c4e4bede45217f0c7978c4f4?apiKey=45441a0d94114ac98b0f24c88cdc4f23&"
          className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden shrink-0 flex-1"
          aria-label="Image 2"
          aria-role="link"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e242d6642f50c947cffe23200381f5374743c12c4e4bede45217f0c7978c4f4?apiKey=45441a0d94114ac98b0f24c88cdc4f23&"
            className="w-full"
            alt=""
          />
        </a>
        <a
          href="https://cdn.builder.io/api/v1/image/assets/TEMP/d6680d650a8dc5ffbd954df012240c73bd34076cafacb8b0a203ff4e6739e797?apiKey=45441a0d94114ac98b0f24c88cdc4f23&"
          className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden shrink-0 flex-1"
          aria-label="Image 3"
          aria-role="link"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6680d650a8dc5ffbd954df012240c73bd34076cafacb8b0a203ff4e6739e797?apiKey=45441a0d94114ac98b0f24c88cdc4f23&"
            className="w-full"
            alt=""
          />
        </a>
      </div>
      <p className="text-zinc-500 text-base z-10 whitespace-nowrap mt-8">
        Madelyn Torff 2021
      </p>
      <a
        href="https://cdn.builder.io/api/v1/image/assets/TEMP/cf030fbefb349b52b5b1a2f931e016182e1cb8961faed4cd3def9d29a9cf31c0?apiKey=45441a0d94114ac98b0f24c88cdc4f23&"
        className="aspect-[4.17] object-contain object-center w-full fill-amber-400 overflow-hidden self-stretch mt-0 max-md:max-w-full"
        aria-label="Image 4"
        aria-role="link"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf030fbefb349b52b5b1a2f931e016182e1cb8961faed4cd3def9d29a9cf31c0?apiKey=45441a0d94114ac98b0f24c88cdc4f23&"
          className="w-full"
          alt=""
        />
      </a>
    </form>
    </>
  )
}

export default contact