import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Dashboardr from "./Dashboardr"
import Register from "./Register"
import RProfile from "./RProfile"

export default props => {
  return (
    <Router>
      <div className="box">
        <Route path="/register" component={Register} />
        <Route exact path="/dashboardr" component={Dashboardr} />
        <Route path="/rprofile" component={RProfile} />
      </div>
    </Router>
  )
}
