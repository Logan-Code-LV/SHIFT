import React, { useState } from "react"
import { useRegister } from "../hooks"

export default props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [website, setWebsite] = useState("")

  const { create } = useRegister()

  function handleRegister(e) {
    e.preventDefault()

    create(username, password, name, website).then(resp => {
      props.history.push("/dashboardr")
    })
  }
  return (
    <div className="register">
      <h1>SHIFT</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
        />{" "}
        <br></br>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br></br>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
        ></input>
        <br></br>
        <input
          type="url"
          value={website}
          onChange={e => setWebsite(e.target.value)}
          placeholder="Website"
        ></input>
        <br></br>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
