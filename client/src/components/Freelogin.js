import React, { useState } from "react"
import { useAuth } from "react-auth"

export default props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { signin } = useAuth()

  function handleLogin(e) {
    e.preventDefault()

    signin(username, password).then(resp => {
      props.history.push("/dashboardf")
    })
  }

  return (
    <div className="wrapper">
      <h1> Log In </h1>
      <form onSubmit={handleLogin}>
        <div className="username">
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="password">
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <ul class="box-area">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}
