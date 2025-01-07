import React from 'react'
import './Pokemon.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const Pokemon = () => {

     const username = useRef(null)
     const password = useRef(null)

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(username.current.value, password.current.value);
        

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" id='username' ref={username} />
                <input type="text" id='password' ref={password} />
                <button>click</button>
            </form>
        </>
    )
}

export default Pokemon  