import React from 'react'
import { useState , useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { DotLoader } from 'react-spinners';

const Ingredients = () => {

        const [ingredients, setIngredients] = useState({});
        const [instruction, setInstruction] = useState([]);
        const [open, setOPen] = useState(false);
        const [spinner, setSpinner] = useState(true);    

        let arr;
        let params = useParams();
         const fetchdetails = async () => {

        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
        const ingredient = await data.json();
        
        setIngredients(ingredient.meals);
        let str =      ingredient.meals[0]?.strInstructions
        arr= str?.split(',');
        setInstruction(arr); 

        if(ingredients){
            setSpinner(false);
        }else{
            setSpinner(false);
        }
    }; 

    


    useEffect(() => {
       fetchdetails()
    }, [params.name]);

    const toggle = () => {
        setOPen(!open);
      };
  
    




  return (
    <>
   <h1 className='items-center flex justify-center mt-4 text-xl font-bold font-italic'>{ingredients[0]?.strCategory}</h1>
   {spinner ? <DotLoader className='mx-auto mt-[15%]' /> :  <div class="flex flex-col  h-screen">
	<div
		class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
		<div class="w-full md:w-1/3 bg-white grid place-items-center">
			<img src={ingredients[0]?.strMealThumb
} alt="tailwind logo" class="rounded-xl" />
       </div>
			<div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
				<div class="flex justify-between item-center">
					<a href={ingredients[0]?.strYoutube} class="text-gray-500 font-medium hidden md:block">Youtube Video📽️</a>
					<div class="flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
							fill="currentColor">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
						<p class="text-gray-600 font-bold text-sm ml-1">
							Id:
							<span class="text-gray-500 font-normal">{ingredients[0]?.idMeal}</span>
						</p>
					</div>
					
					<div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
					{ingredients[0]?.strArea}</div>
				</div>
				<h3 class="font-black text-gray-800 md:text-3xl text-xl">{ingredients[0]?.strMeal}</h3>
                <a href={ingredients[0]?.strSource} class=" underline font-thin  text-gray-800 md:text-sm text-lg">Detailed Info</a>

                    
                <div class="mt-32">
                    <div class="px-4 sm:px-8 max-w-5xl m-auto">
                        <h1 class="text-center font-semibold text-sm"></h1>
                        <p class="mt-2 text-center text-sm mb-4 text-gray-500">Instruction List</p>
                        <ul class="border border-gray-200 rounded overflow-hidden shadow-md">
                        
                        {  instruction?.slice(0,5)?.map((inst,index) =>  <li key={index} class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">{inst}</li>)    }
                        <button onClick={toggle}><span className='text-gray-800 font-thin'>{open ? "Show Less."  :"Show More.."}</span></button>

                        {open && (
                            <>
                            { instruction.slice(5)?.map((inst,index) =>  <li key={index} class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">{inst}</li>)    }
                            </>
                            )}
                        
                        </ul>
                        <a href="mailto:jefte_caro@yahoo.com" class="text-xs text-center block mt-4 hover:underline"></a>
                    </div>
                </div> 

               

			</div>
		</div>
	</div>
}

   

  </>
    )
}

export default Ingredients




{/* <div className='flex flex-col justify-between p-4 leading-normal w-[100%]'>
</div>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{ingredients[0]?.strMeal}</h5>
        <p className='text-gray-500 font-extrabold'><span>Area:</span>{ingredients[0]?.strArea}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{ingredients[0]?.strInstructions}</p>
    </div> */}


     