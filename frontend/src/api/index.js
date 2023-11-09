import axios from 'axois'
const url = 'http://localhost:5000/posts'

const fetctPosts = () => axios.get(url);