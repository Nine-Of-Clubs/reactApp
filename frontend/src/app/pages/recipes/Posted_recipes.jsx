import React from 'react'
import {Searchbox} from '../../../components'
import Posts from '../../../components/Posts/Posts'

const Post = () => {
  return (
    <div className='p-8'>
     <Searchbox/>
     <Posts/>
    </div>
  )
}

export default Post