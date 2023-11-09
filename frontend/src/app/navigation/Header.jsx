import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
  
    <header className='flex items-center justify-around bg-gray-900 font-poppins font-medium w-full h-auto shadow-2xl py-2'>
        <img src="https://img.freepik.com/free-vector/restaurant-tasty-food-logo-design_460848-10307.jpg?w=740&t=st=1699004144~exp=1699004744~hmac=260be63d44f3ac2002be640057f800da4ed619bf6025bc02c31ea0ce8758d89d" alt="Tasty Food" 
        className='h-[2.5rem] w-auto rounded-md font-semibold flex items-center justify-center text-blue-200' />

        <div className='flex items-center justify-center gap-y-6'>
        <Link to='/' className='mx-4 font-medium text-slate-100'>Home</Link>
                <Link to='/recipe' className='mx-4 font-medium text-slate-100'>Recipes</Link>
                <Link to='/food' className='mx-4  text-slate-100'>Foods</Link>
         
                <Link to='/post' className='font-medium capitalize mx-4 text-slate-100'>Posted recipes</Link>
                 <Link to='/create' className=' font-medium capitalize mx-4 text-slate-100'>Create recipe/Upload recipe</Link>
                {/* <Link to='/ai'  className='mx-4 font-semibold'>Assistance</Link> */}
      
        </div>

        <div className="flex align-center justify-center">
            <Link to='/login'
            className='h-10 w-48 bg-sky-600 rounded-md text-white capitalize font-bold mx-6 flex items-center justify-center'>
                sign in or sign up </Link>
            {/* <Link to='/signup'
             className='h-10 w-20 bg-sky-600 rounded-md text-white capitalize font-bold flex items-center justify-center'>sign up
             </Link> */}
        </div>


    </header>
    
  
    </>
    
  )
}

export default Header