import React, { useContext } from 'react'
import { BioContext } from './context'

const Service = () => {
    const {myName,age} = useContext(BioContext)
  return (
    <>
        <div>my name is serive and {myName} and his age is {age} </div>
    </>
  )
}

export default Service