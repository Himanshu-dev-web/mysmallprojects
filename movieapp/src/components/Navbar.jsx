import React,{useState,useEffect} from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [genre, setGenre] = useState([]);

    const getGenere  = async () => {
        const data =  await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=a70b5b9ebda13841cdd19369b5aca98d&language=en-US")
        const Genere = await data.json();
        setGenre(Genere.genres);
    }
 
useEffect(() => {
    getGenere();
}, []);


  return (
    <div>
            
<nav  class="bg-white border-gray-200 dark:bg-gray-900 ">
    <div class="flex flex-wrap justify-center md:justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <Link  to={'/'} class="flex items-center mb-3">
            <img src="https://cdn-icons-png.flaticon.com/512/3658/3658959.png" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">TmdbMoviesApp</span>
        </Link>
        <Search/>
    </div>
</nav>

<nav className="bg-gray-50 dark:bg-gray-900">
    <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div class="flex items-center justify-center">
            <ul class="flex flex-row flex-wrap justify-center mt-0 mr-6 space-x-8 text-sm font-medium">
            <Link to={'/'}>    <li className='text-white  font-bold cursor-pointer '>Home</li>
            </Link>
            <Link to={'/nowplaying/'+ "Currentlyplaying"}>        <li className='text-white  font-bold cursor-pointer'>Now Playing</li> </Link>
            </ul>
        </div>
    </div>
</nav>
<nav className="bg-gray-50">
    <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div class="flex items-center justify-center">
            <ul class="flex flex-row flex-wrap justify-center mt-0 mr-6 space-x-8 text-sm font-medium">
            {
                genre?.map((item,i) => {
                return (
                    <Link to={'/genres/'+ item?.id} params={{ name: item.name }} >
                    <li className='text-gray-800 italic font-normal cursor-pointer' key={i}>{item?.name}</li>
                    </Link>
                )
                })
            } 
            </ul>
        </div>
    </div>
</nav>


    </div>
  )
}

export default Navbar