import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { AuthProvider } from "react-auth"

import Freeregister from "./Freeregister"
import Restregister from "./Restregister"
import RProfile from "./RProfile"
import Restlogin from "./Restlogin"
import Viewfreelancers from "./Viewfreelancers.js"
import Jobpost from "./Jobpost.js"
import FProfile from "./FProfile"

import Freelogin from "./Freelogin"

import Home from "./Home.js"
// import LoginSem from "./semantic/LoginSemantic.js"

// import "../styles/login.css"

export default props => {
  return (
    <AuthProvider>
      <Router>
        <div className="box">
          {/* <Route exact path="/login" component={LoginSem} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/restlogin" component={Restlogin} />
          <Route exact path="/freeregister" component={Freeregister} />
          <Route exact path="/jobpost" component={Jobpost} />
          <Route exact path="/Viewfreelancers" component={Viewfreelancers} />
          <Route exact path="/rprofile" component={RProfile} />
          <Route exact path="/fprofile" component={FProfile} />
          <Route exact path="/restregister" component={Restregister} />
        </div>
      </Router>
    </AuthProvider>
  )
}
