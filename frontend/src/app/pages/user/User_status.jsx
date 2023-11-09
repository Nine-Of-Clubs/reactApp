import React from 'react'
import {useState, useEffect} from 'react'
import User_login from './User_login'
import User_signup from './User_signup'


const User_status = () => 
{
  const[login, setLogin]= useState(false)

  function handleSignin() {
    setLogin(true)
     }
     function handleSignup() {
       setLogin(false)
        }

  return (
    <div className='pt-12'>
      <div className='w-[80%] h-[32rem] bg-[#f0f2fa] flex  rounded-xl shadow-xl items-center justify-start ring-2 overflow-hidden ml-32 '>
        <div className='bg-slate-300 h-full flex justify-center items-center flex-col gap-4 p-8 w-[50%]' >
         <h1 className='capitalize text-2xl font-bold'>
      {
        login?   'welcome back!' :  'Welcome new user'
      }
        </h1>
         <p className='font-semibold text-xl text-center'>
      {
        login ? '   Sign in with your credentials to continue...' :  'Sign up with correct credentials to get started...'
      }
       </p>
      
         <div  className='flex justify-center items-center gap-8 mt-4 '>
      <button className='h-[2.5rem] px-8 font-semibold capitalize bg-slate-500 rounded-lg shadow-xl ring-gray-950 ring-1' onClick={handleSignup}>sign up</button>
      <button className='h-[2.5rem] px-8 font-semibold capitalize bg-slate-500 rounded-md shadow-xl ring-gray-950 ring-1' onClick={handleSignin}>sign in</button>
         </div>
        </div>
        <div className='h-full w-[50%]'>{login? <User_login/>: <User_signup/>}</div>
      
      </div>
    </div>
  )
}

export default User_status