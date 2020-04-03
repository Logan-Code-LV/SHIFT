import React, { useState, useEffect } from "react"

import { useItems } from "../../hooks"
import { useTheJob } from "../../hooks"
import { useJobs } from "../../hooks"
import { useAuth } from "../../lib/react-auth-new.js"

export default props => {
  const { free, get } = useTheJob()
  const { add } = useItems()
  const { profile } = useAuth()
  const { freeId, updateInterest } = useJobs(profile.username)

  useEffect(() => {
    get()
  }, [])

  return (
    <div className="viewjobstitle">
      <h3>Available SHIFTs!</h3>
      <div className="viewjobscomponent">
        {free.map(item => (
          <div key={`job-${item.id}`}>
            <h3 className="jobname">{item.restname}</h3>
            <h5 className="jobdesc">{item.jobdesc}</h5>
            <h5 className="jobpay">{item.pay}</h5>
            <button
              className="dashboardfbutton"
              onClick={e => {
                add(item)
                updateInterest({ itemId: item.id, freeId })
              }}
            >
              Interested
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
