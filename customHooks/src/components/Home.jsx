import React from 'react'
import { useBioContext } from '../custom-hook'


const Home = () => {
    const {myName,age} = useBioContext()

  return (
    <div>context api mil gaya, my name is {myName} and my age is {age}</div>
  )
}

export default Home