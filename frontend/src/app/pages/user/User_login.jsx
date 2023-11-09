import React,{useState} from 'react'
import Button  from '../../../components/Button.jsx'
import Modal from '../../../modals/modal'

const User_login = () => {
  const [openModal, setOpenModal] = useState(false)
  function closeModal(){
      setOpenModal(false)
  }
  function openingModal(){
      setOpenModal(true)
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = (e) => {
    e.preventDefault()
    if (username == '' && password == '') {
alert('empty username and password')
  }
  else if(username.toString().length < 8 || password.toString().length < 8)
   {
    alert('too short')
  }
else{
  alert('done!')
}
}
  return (
    <>
 {/* {
  openingModal && <Modal/>
 } */}
    <div className='flex flex-col items-center justify-center h-full  '>
 
    <form action="" method='post' className='flex flex-col items-center justify-center bg-silver-600 h-full p-8 rounded-lg gap-8 w-full'>
      <h1 className='font-bold text-center text-blue-800 my-4 text-4xl'>Sign In</h1>
      <p className='font-semibold capitalize text-blue-600'>Continue with your culinary journey</p>
      <input type="text" name="" id=""placeholder='username' className='h-12 w-[90%]  bg-slate-200 rounded-md outline-none r ring-2 my-2 placeholder:capitalize text-xl font-semibold ' onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder='password'  className='h-12 w-[90%]  bg-slate-200 rounded-md outline-none ring-2 my-2 placeholder:capitalize text-xl font-semibold'  onChange={(e) => setPassword(e.target.value)}/>
      <Button buttonText='Sign In' btnFunction={handleLogin}/>
    </form>
    </div>
    </>
  )
}

export default User_login

