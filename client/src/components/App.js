import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { AuthProvider } from "react-auth"
import Register from "./Register"
import RProfile from "./RProfile"
import Login from "./Login"
import Dashboardr from "./Dashboardr"
import Viewfreelancers from "./Viewfreelancers.js"

export default props => {
  return (
    <AuthProvider>
      <Router>
        <div className="box">
          <Route path="/login" component={Login} />
          <Route exact path="/dashboardr" component={Dashboardr} />
          <Route exact path="/Viewfreelancers" component={Viewfreelancers} />
          <Route path="/rprofile" component={RProfile} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    </AuthProvider>
  )
}
