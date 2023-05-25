import React, { useState } from 'react'
import './App.css'

function App() {
  const [temperature, setTemperature] = useState(20)
  const [humidity, setHumidity] = useState(50)
  const [motd, setMotd] = useState("Gillar du dahri? 🐰")
  const [newMotd, setNewMotd] = useState("")

  function changeTemperature(increment) {
    setTemperature(temperature + increment)
  }

  function changeHumidity(increment) {
    setHumidity(humidity + increment)
  }

  return (
    <>
      <h1>Olivers sjukt coola hemsida skriven i react</h1>
      <h2>MOTD: {motd}</h2>
      <span>Nuvarande temperatur: {temperature}   </span>
      <button onClick={() => changeTemperature(1)}>+</button>
      <button onClick={() => changeTemperature(-1)}>-</button>
      <br />
      <span>Nuvarande fuktighet: {humidity}%   </span>
      <button onClick={() => changeHumidity(1)}>+</button>
      <button onClick={() => changeHumidity(-1)}>-</button>
      <br />
      <label htmlFor="motd">
        Nytt MOTD: <input type="text" name="motd" id="motd" placeholder='Hej hej' onChange={e => setNewMotd(e.target.value)}/>
      </label>
      <button onClick={() => setMotd(newMotd)}>Uppdatera</button>
    </>
  )
}

export default App