import React, { useState, useEffect } from "react"
import { useAllInterested } from "../../hooks"
import { useItems } from "../../hooks"
import { useTheJob, useProfilefree } from "../../hooks"
import { useAuth } from "../../lib/react-auth-new.js"

export default props => {
  const { free } = useTheJob()
  const { add } = useItems()
  const { addMe } = useAllInterested()
  const { profile } = useAuth()
  const { free_id } = useProfilefree(profile.username)

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
                addMe(item.id, free_id)
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
