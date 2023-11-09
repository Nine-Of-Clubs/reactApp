import React from 'react'
import {Link} from 'react-router-dom'
import { Searchbox } from '../../components/index';
import {useState, useEffect} from 'react'
import RecipeCard from '../../components/RecipeCard';


const Recipes = () => {

  const randomNumber = Math.floor(Math.random() * 8);



  let meals = ['chicken', 'fish', 'beef', 'steak', 'pork', 'eggs', ]
  const [query, setQuery] = useState('chicken')
  const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [items, setItems] = useState([]);
const [search, setSearch] = useState(false);



// if(search){
//   // query = setQuery(query)
  
// }
// else(
//  query = meals[randomNumber]
// )



 


// const apiKey = 'Jb4lL0VPu1x0LEaUKnTd9PfL3tVip809NYlioA28';

  const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${query}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '810e39dd52msh40d363d2bd8eea1p1847efjsnfd7c757f76eb',
		'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
	}
};




// const options;

useEffect(() => {

  fetch(url,options).then((res) => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result);
        console.log(result)
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
}, [query]); 

function SearchInputChange(e)  {
  e.preventDefault()
  setQuery(e.target.value)
setSearch(true)

  const filteredItems = items.filter((item) =>
  item.title.toLowerCase().includes(e.target.value.toLowerCase())
);
setItems(filteredItems);
}



if (error) {
  return <div className='text-slate-100'>Error: {error.message}</div>;
} else if (!isLoaded) {
  return <div className='text-slate-100'>Loading...</div>;
} else {


  return (
    <>
        <div className='flex justify-center flex-col h-full w-full'>
          <div className='bg-blue-500 h-16 flex  items-center justify-between px-4'>
                 
      
              
                 </div>
                 <div className='p-2'>
                  <h1 className='text-center  text-4xl font-bold '>Discover Recipes</h1>
<Searchbox search={query} function={SearchInputChange}/>
<div className='flex flex-wrap m-[0 auto] justify-center items-center content-start'  >
{
  items.map((items, index) =>
    (
    
      <RecipeCard 
      image={items.image_url} 
      title={items.title} 
      publisher={items.ingredients}
       source={items.servings} 
       procedure={items.instructions}
        key={index}/>
      
    )

  )
}
</div>
                  <div>

                  </div>
        
                 </div>
        </div>
       </>

  )
}
}


export default Recipes