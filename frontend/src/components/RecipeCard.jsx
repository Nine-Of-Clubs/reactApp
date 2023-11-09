import React from 'react'

const RecipeCard = (props) => {
  return (
    <div className='bg-blue-200 p-8 w-[20rem] rounded-xl text-center h-[25rem] overflow-scroll no-scrollbar ring-1 m-3' >
        <img src={props.image} alt="" />
        <p className='font-semibold mb-3'>{props.title}</p>
     <p className='font-bold mb-3'>{props.source}</p>
      
            <p className='my-3 text-blue-800'>{props.publisher}  </p>
            <p className='text-md font-semibold'>{props.procedure}</p>
      

        
    </div>
  )
}

export default RecipeCard