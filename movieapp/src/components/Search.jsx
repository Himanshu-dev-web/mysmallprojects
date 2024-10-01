import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom'


const Search = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
     const submitHandler = (e) => {
        e.preventDefault();
        setInput(e.target.value);
        navigate("/search/" + input);
        setInput("");
    };


  return (

    <> 
<div class="flex justify-center">
<form onSubmit={submitHandler} action="">

  <div class="relative mb-3 xl:w-96" data-te-input-wrapper-init>
    <input
    onChange={(e) => setInput(e.target.value)}
    value={input}
      type="search"
      class="peer block min-h-[auto] w-full  border-b bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
      id="exampleSearch2"
      placeholder="Type query" />
    <label
      for="exampleSearch2"
      class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
      >Search Your Movies</label>
  </div>
  </form>
</div>
    </>
  )
}

export default Search