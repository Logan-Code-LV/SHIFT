import React, { useState } from "react"
import { useAuth } from "react-auth"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { signin } = useAuth()

  function handleLogin(e) {
    e.preventDefault()

    signin(username, password).then(resp => {
      props.history.push("/rprofile")
    })
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
