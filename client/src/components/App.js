import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { AuthProvider } from "react-auth"

import Login from "./Login"
import Dashboardr from "./Dashboardr"
import Viewfreelancers from "./Viewfreelancers.js"

export default props => {
  return (
    <AuthProvider>
      <Router>
        <div className="box">
          <Route path="/login" component={Login} />
          <Route exact path="/Dashboardr" component={Dashboardr} />
          <Route exact path="/Viewfreelancers" component={Viewfreelancers} />
        </div>
      </Router>
    </AuthProvider>
  )
}
