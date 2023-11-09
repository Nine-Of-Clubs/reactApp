import React from 'react'
import {search,microphone} from '../assets'

const Searchbox = (props) => {
  return (
    <div className='px-8'>
    <form action="" className='flex items-center border-2 rounded-2xl px-3 h-12 w-full bg-slate-300 justify-around cursor-pointer ring-2 ring-slate-900'>
      <img src={search} alt="" className='h-6' />
      <input type="text"
       name="search"
        id="search"
         placeholder='Search...'
         value={props.search} 
         onChange={props.function} 
       className='w-[80%] h-[98%] bg-transparent outline-none' />
      <hr className='h-[90%] w-[1px] bg-black rounded-3xl'/>
      <img src={microphone} alt="mc" className='h-6'/>
    </form>
    </div>
  )
}

export default Searchbox