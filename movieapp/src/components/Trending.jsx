import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CircleLoader from 'react-spinners/CircleLoader';
import { GridLoader } from 'react-spinners';


const Trending = () => {
    
    const [spinner, setSpinner] = useState(true);    
    const [details, setDetails] = useState([]);
    const [img, setImg] = useState("");
    const [open, setOPen] = useState(false);
    const [h, setH] = useState("");
    let params = useParams();

    
   

    const fetchdetails = async () => {
        if(params.id){
            const data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=a70b5b9ebda13841cdd19369b5aca98d&with_genres=${params.id}`)
            const topdata = await data.json();
            setDetails(topdata.results);
            setH(params.id);
        }
        else if(params.name){
            const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a70b5b9ebda13841cdd19369b5aca98d&query=${params.name}`)
            const topdata = await data.json();
            setDetails(topdata.results);
            setH(params.name);
        }
        else if(params.Currentlyplaying){
            const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=a70b5b9ebda13841cdd19369b5aca98d&language=en-US&page=1`)
            const topdata = await data.json();
            setDetails(topdata.results);
        }
        else{
            const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=a70b5b9ebda13841cdd19369b5aca98d&language=en-US&page=1`)
            const topdata = await data.json();
            setDetails(topdata.results);
        }
        if(details){
            setSpinner(false);
        }else{
            setSpinner(true);
        }
    };

    useEffect(() => {
       fetchdetails();
    }, [params]);

    const toggle = () => {
        setOPen(!open);
    };
  

  return (
    <>
        <img src={img} alt="" />
    <h1 className='items-center flex justify-center mt-6 font-extrabold text-lg'>Top Rated {params.name || params.Currentlyplaying || params.id}</h1>
    <div className='w-[95%] flex flex-row justify-evenly flex-wrap mx-auto mt-6'>
    {spinner &&     <GridLoader className='mt-[15%]' color="gray" />}
    {details?.map((details,i) =>{
        return (
            <Link to={'/details/'+ details?.id}>
            <div key={i} class="transition ease-in-out delay-160 bg-gray-200 hover:-translate-y-1 hover:scale-105 hover:bg-gray-100 duration-200 max-w-sm rounded overflow-hidden shadow-lg mt-4">

                <img class="w-full" src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`} alt="No img Availaible"></img>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{details?.title}</div>
                    <p class="text-gray-700 text-base">
                    {(details?.overview).slice(0,190)}
                    </p>
                    <button onClick={toggle}><span className='text-gray-800 font-thin'>"Show More.."</span></button>   
                </div>
                <div class="px-6 py-1">
                    <h2 className='font-bold text-sm mb-2'>Release Date : <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 '>{details?.release_date}</span></h2>
                    <h2 className='font-bold text-sm mb-2'>Rating : <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 '>{details?.vote_average}</span></h2>
                    <h2 className='font-bold text-sm mb-2'>Language : <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 '>{details?.original_language}</span></h2>
                </div>    
            </div>
            </Link>
        )
    })}
    </div>
    </>
  )
}

export default Trending