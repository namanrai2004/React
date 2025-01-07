import React from 'react'
import { useBioContext } from '../custom-hook'


const Service = () => {
    const {myName,age} = useBioContext()
  return (
    <>
        <div>my name is serive and {myName} and his age is {age} </div>
    </>
  )
}

export default Service