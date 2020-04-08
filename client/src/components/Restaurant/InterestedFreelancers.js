import React, { useState, useEffect } from "react"
import { useAuth } from "../../lib/react-auth-new.js"
import { useJobs, useAllInterested } from "../../hooks"

import "../../styles/viewfreelancers.css"

export default props => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const { profile } = useAuth()
  const { addfree } = useAllInterested()
  console.log(addfree)
  return (
    <div className="jobposts">
      <h3>Freelancers:</h3>
      <div className="viewfreelancers">
        {addfree.map((item, i) => (
          <div key={"job" + i} className="onejob">
            <h4 className="freefname">Fist Name:{item.firstname}</h4>
            <h5 className="freelname">Last Name: {item.lastname}</h5>
            <h5 className="email">Email: ${item.email}</h5>
            <h5 className="phone">Contact: ${item.phone}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}
