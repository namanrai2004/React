import React, { useState } from 'react'
import './Todo.css'
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Todo = () => {
    const [input, setInput] = useState('')
    const [task, setTask] = useState(() =>{
       const rawTodos =  localStorage.getItem("reactTodo")
       if(!rawTodos) return []
        return JSON.parse(rawTodos)
    })
    const [date, setDate] = useState()



    const handleFormSubmit = (e) => {
        e.preventDefault()

        if (input == '') return alert("Please Write something")
        if (task.includes(input)) {
            setInput("")
            return alert('you typed same task')
        }
        setTask((prev) => {
            const updatetask = [...prev, input]
            console.log([...prev, input]);
            return updatetask
        }
        )
        setInput("")
    }

    //Local Storage
    localStorage.setItem("reactTodo", JSON.stringify(task))


    const deleteBtn = () =>{
            console.log(task);
            
    }

    //Date and Time
    //   setInterval(() => {
    //     setDate((new Date().toLocaleString()))
    // }, 1000);
    
    return (
        <>
            <section className='todo-container'>
                <header>
                    <h1>Todo List</h1>
                    <h2 className='date-time'>{date}</h2>
                </header>
                <section className='form'>
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <input
                                value={input}
                                onChange={(e) => {
                                    setInput(e.target.value)
                                }}
                                type="text" className='todo-input' autoComplete='off' />
                        </div>
                        <div>
                            <button type='submit' className='todo-btn'>Add Task</button>
                        </div>
                    </form>

                    <section className='myUnOrdList'>
                        <ul>
                            {
                                task.map((val, index) => {
                                    return <li key={index} className='todo-item'>
                                        <span>{val}</span>
                                        <button className='check-btn'><FaCheck /></button>
                                        <button
                                        onClick={deleteBtn}
                                         className='delete-btn'><MdDelete /></button>
                                    </li>
                                })
                            }
                        </ul>
                    </section>
                            <section>
                                <button onClick={() => setTask([])} className='clear-btn'>Clear</button>
                            </section>

                </section>
            </section>
        </>
    )
}

export default Todo 