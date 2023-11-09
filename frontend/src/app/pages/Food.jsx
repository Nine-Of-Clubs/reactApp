import React from 'react'
import  {Searchbox} from '../../components'
import {getMeal} from '../../api/meals.js'
import MealCard from '../../components/MealCard.jsx'
import {useState, useEffect} from 'react'

const Food = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [items, setItems] = useState([]);

  useEffect(() => {

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.meals);
          console.log(result)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [searchTerm]); 


  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (error) {
    return <div className='text-slate-100'>Error: {error.message}</div>;
  } else if (!isLoaded) {

    return <div className='text-slate-100'>Loading...</div>;
  } else {
  return (
    <div className='flex flex-col'>
      <h1 className='text-center  text-3xl font-bold my-4'>Foods</h1>
      <Searchbox search={searchTerm} function={handleSearchInputChange}/>
<div className='flex flex-wrap items-center justify-center bg-slate-700'>
      {items.map((item,index) => (
        
                 <MealCard image={item.strMealThumb} link={item.strYoutube} name={item.strMeal} key={index} area={item.strArea}/>
          ))}

</div>
      

    
    


    </div>
  )
}
}

export default Food