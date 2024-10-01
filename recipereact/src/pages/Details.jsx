import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState , useEffect} from 'react';
import Ingredients from './Ingredients';
import { DotLoader } from 'react-spinners';


const Details = () => {

    let params = useParams();
    const [spinner, setSpinner] = useState(true);    
    const [details, setDetails] = useState([]);
    const fetchdetails = async () => {
        setSpinner(true);

        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
        const details = await data.json();
        setDetails(details.meals);
        if(details.meals){
            setSpinner(false);
        }else{
            setSpinner(true);
        }
    };
    useEffect(() => {
       fetchdetails();
    }, [params.name]);

   

  return (
    <>
        <div >
        </div>
        {
            (details != null) ?  <h1 className='flex justify-center my-6'>{`You Are Watching ${details[0]?.strCategory}`}</h1> : <h1 className='flex justify-center my-6'>Go Back Please</h1>

        }
        {spinner ? <DotLoader className='mx-auto mt-[15%]'/> : ""}

        <div className=' flex flex-row justify-center flex-wrap mx-6 '>

            {
             (details != null) && Array.isArray(details) ? details.map((item,i) => {
            return (
            <div key={i}  class=" border-none flex flex-col m-2  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img class="rounded-t-lg" src={item?.strMealThumb} alt="" /> 
                <div class="p-5">
                   
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item?.strMeal}</h5>
                        <p class="mb-2 text-lg font-bold tracking-tight text-gray-400 ">{item?.strArea}</p>

                  
                    <h6 class=" text-white">Site Link:</h6>
                    <a href={item?.strSource} className='text-blue-400 block'>{(item?.strSource)?.substring(0,30)}..</a>
                    <Link to={'/ingredients/'+ item.strMeal} state={{details:details}}>
                    <button
                            className="mt-3 bg-green-500 rounded-lg text-white active:bg-green-600 font-bold uppercase text-sm px-4 py-2  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                        >
                            Get Ingredients..
                        </button>
                    </Link>
                         </div>
                </div>
                            )
        }) : <h1 className='mt-[20%]'>Sorry No Data is availaible For this product</h1>
        }
        </div>
    </>
  )
}

export default Details