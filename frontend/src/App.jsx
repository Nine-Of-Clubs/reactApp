import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {CreateRecipe, Post } from './app/pages/recipes/index.js'
import { Header, Food, Home,Recipes, User_status } from './app/index'


export default function App() {
  return (
    <>
    <BrowserRouter>
<Header/>

<main className='home_page_main'>
  <Routes>
    {/* <Route path='/login' element={<User_login/>} /> */}
    <Route path='/login' element={<User_status/>} />
    <Route path='/' element={<Home/>} />
    <Route path='/food' element={<Food/>} />
    {/* <Route path='/ai' element={<Ai/>} /> */}
    <Route path='/recipe/*' element={<Recipes/>} />
    <Route path='/create' element={<CreateRecipe/>}/>
              <Route path='/post' element={<Post/>}/>
 
  </Routes>
 
</main>


</BrowserRouter>

</>

  )
}