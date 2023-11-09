import React, {useState} from 'react'
import { Button } from '../../../components/index'

const User_signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(username === '' && password === '' && email === '') { 
alert('please enter required details')
  }
  else if(username.toString().length < 6 || password.toString().length < 8 ){
alert('passwords must be at least 8 characters and usernames atleast 6 characters')
  }
  else{
    alert('account  successfully created')
  }
}
  return (
    <div className='flex flex-col items-center justify-center h-full w-full'>
    <form action="" method='post' className='flex flex-col items-center justify-center bg-green-700 h-auto px-16 py-16 rounded-lg gap-4 shadow-2xl w-full '>
      <h1 className='font-bold text-center text-blue-100 mb-2 text-4xl'>Sign Up</h1>
      <p className='font-semibold capitalize text-blue-200'>Begin your culinary journey with us, Today!</p>
      <input type="text" name="" id=""placeholder='username' className='h-12 w-[90%]  bg-slate-200 rounded-md outline-none  ring-2 mb-2 placeholder:capitalize text-xl font-semibold ' onChange={(e) => setUsername(e.target.value)}/>
      <input type='email' name="" id="" placeholder='email'  className='h-12 w-[90%] bg-slate-200 rounded-md outline-none  ring-2 mb-2 placeholder:capitalize text-xl font-semibold' onChange={(e) => setPassword(e.target.value)}/>
      <input type="password" placeholder='password'  className='h-12 w-[90%]  bg-slate-200 rounded-md outline-none  ring-2 mb-2 placeholder:capitalize text-xl font-semibold' onChange={(e) => setEmail(e.target.value)}/>
      <Button buttonText='Sign Up' btnFunction={handleSubmit}/>
    </form>
    </div>
  )
}

export default User_signup