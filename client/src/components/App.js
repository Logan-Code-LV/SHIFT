import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { AuthProvider } from "react-auth"

import Home from "./Home.js"

import DashboardR from "./DashboardR.js"
import DashboardF from "./DashboardF.js"

import Freeregister from "./Freeregister"
import Restregister from "./Restregister"

import Restlogin from "./Restlogin"
import Freelogin from "./Freelogin"

import RProfile from "./RProfile"
import FProfile from "./FProfile"

import Viewfreelancers from "./Viewfreelancers.js"
import Jobpost from "./Jobpost.js"
import Viewjobs from "./Viewjobs"

// import "../styles/login.css"

export default props => {
  return (
    <AuthProvider>
      <Router>
        <div className="box">
          {/* <Route exact path="/login" component={LoginSem} /> */}
          <Route exact path="/" component={Home} />

          <Route exact path="/restlogin" component={Restlogin} />
          <Route exact path="/restlogin" component={Freelogin} />

          <Route exact path="/freeregister" component={Freeregister} />
          <Route exact path="/restregister" component={Restregister} />

          <Route exact path="/dashboardr" component={DashboardR} />
          <Route exact path="/dashboardf" component={DashboardF} />

          <Route exact path="/jobpost" component={Jobpost} />
          <Route exact path="/Viewfreelancers" component={Viewfreelancers} />
          <Route exact path="/viewjobs" component={Viewjobs} />
        </div>
      </Router>
    </AuthProvider>
  )
}
