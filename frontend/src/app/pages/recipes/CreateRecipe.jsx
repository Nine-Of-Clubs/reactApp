import React,{ useState } from 'react'

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState(
    {
      recipename: '',
      ingredients: '',
      instructions: '',
      image: null,
    }
  )

  const handleInputChange = (e) => {
 setRecipe.recipename(e.target.value);
 setRecipe.ingredients(e.target.value);
 setRecipe.instructions(e.target.value);
//  setRecipe.image = e.target.value;
  }

  const handleImageChange = () => {
    const image = e.target.files[0];
    setRecipe({ ...recipe, image });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    //database

    const formData = new FormData();
    formData.append('name', recipe.recipename);
    formData.append('ingredients', recipe.ingredients);
    formData.append('instructions', recipe.instructions);
    formData.append('image', recipe.image);

    try {
      const response= await fetch('/api/recipes', {
        method: 'POST',
        body: formData,
      });

      if(response.ok){
        alert('uploaded')
      }
      else{
        console.error(error)
      }
    } catch (error) {
      console.error(error)
      
    }
  }
  return (
 <>
 <div className='flex flex-col  items-center justify-center'>
  <h2 className='font-extrabold text-2xl text-blue-700 mt-8'>Create Recipe</h2>
<form action="" onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-[80%]  rounded-lg p-8 gap-y-2 bg-green-100 ring-2 my-4'>
  <div className='flex flex-col text-center font-semibold capitalize my- items-center justify-center w-full'>
    <label htmlFor="name">Recipe Name:</label>
    <input type="text" id='name' name='name' value={setRecipe.recipename} onChange={handleInputChange} className='border-2 h-12 w-[80%] rounded-lg'/>
  </div>
  <div className='flex flex-col text-center font-semibold capitalize my- items-center justify-center w-full'>
    <label htmlFor="ingredients">Ingredients:</label>
    <input type="text" id='ingredients' name='ingredients' value={setRecipe.ingredients} onChange={handleInputChange} className=' border-2 h-12 w-[80%] rounded-lg'/>
  </div>
  <div className='flex flex-col text-center font-semibold capitalize my- items-center justify-center w-full'>
    <label htmlFor="instructions">Instructions:</label>
    <input type="text" id='instructions' name='instructions' value={setRecipe.instructions} onChange={handleInputChange} className=' border-2 h-12 w-[80%] rounded-lg'/>
  </div>
  <div className='flex flex-col text-center font-semibold capitalize my- items-center justify-center w-full bg-slate-400 p-2 rounded-xl my-2'>
    <label htmlFor="image">Upload image:</label>
    <input type="file" id='image' name='image' accept='image/*' onChange={handleImageChange} className='input'/>
  </div>
  <div>
    <button type='submit' className='h-12 w-auto border-2 px-4 font-bold rounded-md bg-blue-600'>Create Recipe</button>
  </div>
</form>
 </div>

 </>
  )
}

export default CreateRecipe