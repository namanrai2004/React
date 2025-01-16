import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {
    const [input,setInput] = useState("")
    const [todo,setTodo] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()
        setTodo((prev) => [...prev,input])
        setInput("")
    }
   
    
    return (
        <>
            <section className='todo-conatinerk'>
            <header>
                <h1>Todo List</h1>
            </header>
            <section className='form'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                         type="text" className='todo-input'  />
                    </div>
                    <div>
                        <button type='submit' className='todo-btn'>Add</button>
                    </div>

                    <ul>
                        {
                            todo.map((val,key) =>{
                                return <li key={key}>{val}</li>
                            })
                        }
                    </ul>
                </form>
            </section>
            </section>
        </>
    )
}

export default Todo 