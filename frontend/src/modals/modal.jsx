import React,{ useState} from 'react'

const Modal = (props) => {
  
  return (
    <div className='absolute bg-gray-500 flex justify-start h-32 w-[20rem] rounded-lg ring-4 items-center'>
        <button className='absolute  h-8 w-8 rounded-full font-extrabold ring-2 right-1 top-1 bg-slate-200' onClick={closeModal}>X</button>
        <div className='flex w-full justify-center items-center'>
<p className='text-lg font-semibold capitalize text-slate-100'>{props.error}</p>
        </div>
    </div>
  )
}

export default Modal