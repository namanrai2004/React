import { useState } from "react"

function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [data, setData] = useState({})
  
  const handleSubmit = (e)  =>{
     e.preventDefault()
     

  }
  
  

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usename">Username: </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
         type="email" id="1" placeholder="Email" required autoComplete="off"/>
          <br />
        <label htmlFor="password">Password: </label>
        <input
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         type="password" id="" placeholder="Password" required autoComplete="off" />
    <br />
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default App
