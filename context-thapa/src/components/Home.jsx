import React, { useContext } from 'react'
import { BioContext } from './context'

const Home = () => {
    const {myName,age} = useContext(BioContext)

  return (
    <div>context api mil gaya, my name is {myName} and my age is {age}</div>
  )
}

export default Home