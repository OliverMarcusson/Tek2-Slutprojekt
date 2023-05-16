import React, { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState("Johan")
  const [newUsername, setNewUsername] = useState("")

  function changeUsername() {
    if (newUsername === "") {
      setUsername("Johan Vinkelslip")
      return
    }
    setUsername(newUsername)
  }
  
  return (
    <>
      <h1>Hello {username}</h1>
      <form>
        <label htmlFor="">Name
          <input type="text" value={newUsername} onChange={e => {setNewUsername(e.target.value)}}/>
        </label>
      </form>
      <button onClick={changeUsername}>Hello</button>
    </>
  )
}

export default App