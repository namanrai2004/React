import React from 'react'
import { useState,useEffect } from 'react'

const Github = () => {
    const [val, setVal] = useState('')
    useEffect(() => {
      const githubFollower = async () => {
            const api = await fetch('https://api.github.com/users/namanrai2004')
            const data = await api.json()
            setVal(data)
      }
      githubFollower()
    })
    

  return (
    <>
     <div className=' text-center bg-slate-700 text-white font-semibold text-3xl m-4 p-4'>
        GitHub followers: {val.followers}
    </div>
     <div className=' text-center bg-slate-700 text-white text-xl m-4 p-4'>
        GitHub Name: {val.name}
    </div>
     <div className=' text-center bg-slate-700 text-white text-xl m-4 p-4'>
        <img src="val.avatar_url" alt="" srcset="" width={300}  /> 
    </div>
    </>
  )
}

export default Github
