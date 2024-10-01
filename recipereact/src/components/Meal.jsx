import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Link} from 'react-router-dom';
import { DotLoader } from 'react-spinners';


// const baseURL = "www.themealdb.com/api/json/v1/1/categories.php";


const Meal = () => {

    const [spinner, setSpinner] = useState(true);    

    const [post, setPost] = React.useState([]);
    const getData  = async () => {
        const data =  await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        const Meal = await data.json();
        const  sdata = Meal.categories;
        setPost(sdata);
        
        if(post){
            setSpinner(false);
        }else{
            setSpinner(false);
        }
    }

    useEffect(() => {
       getData();
      }, []);

    


  return (
    <>
        <h1 className='flex justify-center my-6 font-semibold '>Types of Meals We Have</h1>
        {spinner ? <DotLoader className='mx-auto'/> : ""}

        <div className='flex flex-row justify-center flex-wrap mx-6'>
            { post.map((item,i) => {
            return (
            <div key={i}  class="flex flex-col m-2  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img class="rounded-t-lg" src={item.strCategoryThumb} alt="" /> 
                <div class="p-5">
                   
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.strCategory}</h5>
                  
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{(item.strCategoryDescription).substring(0,100)}.. </p>
                   
                    <Link to={'/details/'+ item.strCategory}>
                        <button  className=' bg-green-500  text-white rounded-lg px-2 py-1'>Read More </button>
                    </Link>
                </div>
            </div>
            )
        })}
        </div>
    </>
  )
}

export default Meal