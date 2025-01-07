import axios from 'axios'
import Post from '../components/Post'

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const get = () =>{
  return api.get('/posts')
}

const deleteData = (id) =>{
  return api.delete(`/posts/${id}`)
}

export {get,deleteData}

