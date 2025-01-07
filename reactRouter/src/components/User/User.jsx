import React from 'react'
import { useParams } from 'react-router'

const User = () => {
    const {userid} = useParams()
  return (
    <div>
        <h1 className='text-3xl text-center font-semibold'>User: {userid}</h1>
    </div>
  )
}

export default User
