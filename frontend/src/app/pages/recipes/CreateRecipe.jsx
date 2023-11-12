import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

const CreateRecipe = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null);
  const [servings, setServings] = useState(null);

  const handlefileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result)
    }

    if(file){
      reader.readAsDataURL(file);
    }
  }


  // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('recipeName', recipeName);
      formData.append('ingredients', ingredients);
      formData.append('instructions', instructions);

      await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Add additional logic for success (e.g., redirect or show a success message)
    } catch (error) {
      console.error('Error uploading recipe:', error);
      // Add error handling logic
    }
  };

  return (
    <div className='flex justify-center items-center h-full w-full '>
      <div className='bg-gradient-to-r from-green-300 to-blue-500 mt-16 p-8 rounded-lg flex w-[80%] gap-4 shadow-xl shadow-green-500'>
       
        <form className='flex flex-col justify-start items-start w-[50%]'>
        <h2 className='text-blue-800 font-bold text-xl mb-2'>Create Recipe</h2>
          <div className='flex flex-col'>
            <label className='text-xl font-semibold mb-2'>Recipe Name:</label>
            <input
              type="text"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              className='h-10 rounded-lg outline-none bg-slate-100'
            />

            <div className='flex flex-col'>
              <label htmlFor="servings"  className='text-xl font-semibold mb-2'>Servings:</label>
              <input 
              type="number"
               name=""
                id="" 
                className='h-10 rounded-lg outline-none bg-slate-100'
                onChange={(e) => setServings(e.target.value)}
                />
            </div>
          </div>
          <div className='flex flex-col'>
            <label className='text-xl font-semibold mb-2'>Ingredients:</label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className='h-10 rounded-lg outline-none bg-slate-100 w-[18rem]'
            />
          </div >
          <div className='flex flex-col'>
            <label className='text-xl font-semibold mb-2'>Instructions:</label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className='h-10 rounded-lg outline-none bg-slate-100 w-[18rem]'
            />
          </div>
          <div>
            <label className='text-xl font-semibold mb-4'>Upload Image:</label>
            <div className="file">
            <input type="file" name="" id="" accept="image/*" onChange={handlefileUpload} className='mb-4 mt-2' />
      
      {/* { image && (<img src={image} alt='uploaded' className='upload' />)} */}
       </div>
            {/* <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
              <input {...getInputProps()} onChange={onDrop}/>
              {isDragActive ? (
                <p>Drop the image here...</p>
              ) : (
                <p className='text-xl font-semibold text-blue-100 h-8 w-auto px-2 bg-slate-500 text-center rounded-lg mb-4 cursor-pointer'>Drag 'n' drop  or click to select </p>
              )}
            </div> */}
          </div>
          <button type="button" onClick={handleUpload}
          className='h-[2.5rem] bg-slate-600 px-4 text-center font-semibold rounded-lg shadow-lg shadow-slate-400 text-slate-200'>
            Upload Recipe
          </button>
        </form>
        <hr className='h-[30rem] bg-slate-900 outline-none border-none w-[1px]'></hr>

        <div>
        
        <h1 className='text-xl font-bold capitalize'>post created</h1>
        <div className='bg-slate-300 w-[20rem] mh-[25rem} rounded-md overflow-hidden'>
          <div className='flex justify-start items-center gap-8 '>
            <img src={image} alt="" className='h-[12rem] wauto'/>
         <div>
          <p className='text-xl font-semibold capitalize'>{recipeName}</p>
          <p className='text-xl font-medium'>{servings + 'servings'}</p>
         </div>
            </div>

          <div className='flex w-full'>
            <div className='bg-yellow-200 w-[50%] p-4'>
            <p className='text-xl text-center p-2 overflow-clip'>{ingredients}</p>
            </div>
            <div className='bg-slate-400 w-[50%]'>{instructions}</div>
          </div>
          

        </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRecipe
