import React, { useState, useEffect } from "react"

import { useItems } from "../../hooks"
import { useTheJob } from "../../hooks"

export default props => {
  const { free, get } = useTheJob()
  const { add } = useItems()

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
            <button className="dashboardfbutton" onClick={e => add(item)}>
              Interested
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
