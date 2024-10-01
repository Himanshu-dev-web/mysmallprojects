import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom'


const Search = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

     const submitHandler = (e) => {
        e.preventDefault();
        setInput(e.target.value);
        navigate("/details/" + input);
        setInput("");

    };
  return (
    <> 
        <form onSubmit={submitHandler} className='flex items-center justify-center'>   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative w-[50%]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input onChange={(e) => setInput(e.target.value)} type="text" value={input}  id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required></input>
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-green-500 px-3 py-2 rounded-lg ">
                Search</button>
            </div>
        </form>
    </>
  )
}

export default Search