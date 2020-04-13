import React, { useEffect } from "react"
import { useAuth } from "../../lib/react-auth-new.js"
import { useJobs, useAllInterested } from "../../hooks"

import "../../styles/viewfreelancers.css"

export default (props) => {
  const { profile } = useAuth()
  const { restId } = useJobs(profile.username)
  const { showFree, getFree } = useAllInterested()

  useEffect(() => {
    getFree(restId)
  }, [restId])

  return (
    <div className="jobposts">
      <h3 className="matches">Freelancer Matches:</h3>
      <div className="viewfreelancers">
        {showFree.map((item, i) => (
          <div key={"job" + i} className="onejob">
            <h2>Interested Freelancer</h2>
            <h4>{item.jobdesc}</h4>
            <h4 className="jobname">
              {item.firstname} {item.lastname}
            </h4>
            <h5 className="jobdesc">Email: {item.email}</h5>
            <h5 className="jobpay">Phone Number: {item.phone}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}
