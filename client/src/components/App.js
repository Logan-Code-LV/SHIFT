import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { AuthProvider } from "react-auth"
import Restregister from "./Restregister"
import RProfile from "./RProfile"
import Restlogin from "./Restlogin"
import Viewfreelancers from "./Viewfreelancers.js"
import Jobpost from "./Jobpost.js"
import FProfile from "./FProfile"

export default props => {
  return (
    <AuthProvider>
      <Router>
        <div className="box">
          <Route exact path="/restlogin" component={Restlogin} />
          <Route exact path="/jobpost" component={Jobpost} />
          <Route exact path="/Viewfreelancers" component={Viewfreelancers} />
          <Route exact path="/rprofile" component={RProfile} />
          <Route exact path="/" component={Restregister} />
          <Route exact path="/fprofile" component={FProfile} />
        </div>
      </Router>
    </AuthProvider>
  )
}
