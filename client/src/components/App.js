import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { AuthProvider } from "../lib/react-auth-new.js"

<<<<<<< HEAD
import Freeregister from "./Freeregister"
import Restregister from "./Restregister"
import RProfile from "./RProfile"
import Restlogin from "./Restlogin"
import Viewfreelancers from "./Viewfreelancers.js"
import Jobpost from "./Jobpost.js"
import FProfile from "./FProfile"
import Viewjobs from "./Viewjobs"
import Interestedfree from "./Interestedfree"
=======
import Home from "./Home.js"
>>>>>>> master

import DashboardR from "./Restaurant/DashboardR.js"
import DashboardF from "./Freelancer/DashboardF.js"

import Freeregister from "./Freelancer/Freeregister"
import Restregister from "./Restaurant/Restregister"

import Restlogin from "./Restaurant/Restlogin"
import Freelogin from "./Freelancer/Freelogin"

import RProfile from "./Restaurant/RProfile"
import FProfile from "./Freelancer/FProfile"

import Viewfreelancers from "./Restaurant/Viewfreelancers.js"
import Jobpost from "./Restaurant/Jobpost.js"
import Viewjobs from "./Freelancer/Viewjobs"

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
          <Route exact path="interestedfree" component={Interestedfree} />
        </div>
      </Router>
    </AuthProvider>
  )
}
