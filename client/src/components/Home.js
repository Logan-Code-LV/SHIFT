import React, { useState } from "react"
import { useRegister } from "../hooks"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { useAuth } from "react-auth"

import Restregister from "./Restregister"
import Freeregister from "./Freeregister"
import Freelogin from "./Freelogin"
import Restlogin from "./Restlogin.js"

import "../styles/home.css"

export default props => {
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  // const [name, setName] = useState("")
  // const [website, setWebsite] = useState("")

  // const { create } = useRegister()
  // const { signin } = useAuth()

  // function handleRegister(e) {
  //   e.preventDefault()

  //   create(username, password, name, website).then(resp => {
  //     props.history.push("/jobpost")
  //   })
  // }

  // function handleLogin(e) {
  //   e.preventDefault()

  //   signin(username, password).then(resp => {
  //     props.history.push("/jobpost")
  //   })
  // }

  return (
    <div className="container">
      <div className="body">
        <h1>SHIFT</h1>
        <p>
          SHIFT is designed to match qualified freelance workers with businesses
          that need positions filled
        </p>
        <div className="logins">
          <Freelogin props={props} />
          <Restlogin props={props} />
        </div>
        <br />
        <h6> New here? - Sign up below </h6>
        <div class="header">
          <h5>
            <Link to="/freeregister">Registration (Freelance Workers)</Link>
          </h5>
          <h5>
            <Link to="/restregister">Registration (Restaurants)</Link>
          </h5>
        </div>
      </div>
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
