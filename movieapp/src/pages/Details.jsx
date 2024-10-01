import React from 'react'
import { useParams } from 'react-router-dom';
import { useState , useEffect} from 'react';
import { GridLoader } from 'react-spinners';

const Details = () => {


    const [details, setDetails] = useState({});
    const [spinner, setSpinner] = useState(true);    

    let params = useParams();

    const fetchdetails = async () => {
        

        const data = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=a70b5b9ebda13841cdd19369b5aca98d`)
        const fetchdata = await data.json();
        setDetails(fetchdata);
        //console.log(fetchdata);
        if(details){
            setSpinner(false);
        }else{
            setSpinner(true);
        }
    };
    useEffect(() => {
       fetchdetails();
    }, [params.id]);


  return (
    <>
       <div className='w-[100%] flex-col md:flex-row items-center justify-center'>
       {spinner ?  <GridLoader className='mt-[15%] ml-[50%] items-center mx-auto' color="gray" /> 
        :    <div class="w-[80%] flex flex-col justify-center mx-auto  md:md:flex-row mt-8">
            
            
            <div className='mx-1 w-[100%] flex flex-row justify-center'>
                <img
                class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-80 md:rounded-none md:rounded-l-lg"
                src={`https://image.tmdb.org/t/p/original${details?.backdrop_path}`}
                alt="" />
            </div>

            <div className=' ml-4 w-[100%]'>
            <h5
                class="mb-2 text-xl font-medium text-black ">
                {details?.original_title}
            </h5>
            <p class="mb-4 text-base text-black ">
                {details?.overview}
            </p>
            <div className=''>
            <h2 className='font-bold text-sm mb-2'>Release Date : <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 '>{details?.release_date}</span></h2>
            <h2 className='font-bold text-sm mb-2'>Rating : <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 '>{details?.vote_average} </span>imdb</h2>
            <h2 className='font-bold text-sm mb-2'>Language : <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 '>{details?.original_language}</span></h2>
            </div>
            <div>
            <h1 className='font-bold text-sm mb-2'>Genere : {details?.genres?.map((item,i) => <span key={i} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 '>{item?.name}</span> )} </h1>
            <h1 className='font-bold text-sm mb-2'>Production Countries : {details?.production_countries?.map((item,i) => <span key={i} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 '>{item?.name}</span> )} </h1>
            <h1 className='font-bold text-sm mb-2'>Languages-Released : {details?.spoken_languages?.map((item,i) => <span key={i} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 '>{item?.name}</span> )} </h1>
            </div>
            <p className='font-bold text-sm mb-2'>Home-Page :  <a href={details?.homepage}  className=' inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 '>Link</a> </p>
            </div>

</div>}

    
       </div>
    </>
  )
}

export default Details