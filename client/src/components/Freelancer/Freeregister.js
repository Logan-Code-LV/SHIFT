import React, { useState } from "react"
import { useRegisterfree } from "../../hooks"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "../../styles/register.css"

export default props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [jobposition, setJobposition] = useState("")
  const [qualifications, setQualifications] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const { free } = useRegisterfree()

  console.log(free)

  function handleRegister(e) {
    e.preventDefault()

    free(
      username,
      password,
      firstname,
      lastname,
      jobposition,
      qualifications,
      email,
      phone
    ).then(resp => {
      props.history.push("/dashboardf")
    })
  }
  return (
    <div className="register">
      <h1>Free Registration</h1>
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
          value={firstname}
          onChange={e => setFirstname(e.target.value)}
          placeholder="First Name"
        ></input>
        <br></br>
        <input
          type="text"
          value={lastname}
          onChange={e => setLastname(e.target.value)}
          placeholder="Last Name"
        ></input>
        <br></br>
        <input
          type="text"
          value={jobposition}
          onChange={e => setJobposition(e.target.value)}
          placeholder="Desired job position"
        ></input>
        <br></br>
        <input
          type="text"
          value={qualifications}
          onChange={e => setQualifications(e.target.value)}
          placeholder="Tell us about your qualifications..."
        ></input>
        <br></br>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
        ></input>
        <br></br>
        <input
          type="text"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="Enter your phone number"
        ></input>
        <br></br>
        <button type="submit">Register</button>
        <Link to="/freelogin"> Login </Link>
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
