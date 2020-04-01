import React, { useState, useEffect } from "react"

import { useItems } from "../hooks"
import { useTheJob } from "../hooks"

import SelectedJobs from "./SelectedJobs"

export default props => {
  const { free } = useTheJob()
  const { add } = useItems()

  return (
    <div>
      <h1>SHIFT</h1>
      {free.map(item => (
        <div>
          <h3>{item.restname}</h3>
          <h5>{item.jobdesc}</h5>
          <h5>{item.pay}</h5>
          <button onClick={e => add(view)} type="submit">
            Interested
          </button>
          <SelectedJobs />
        </div>
      ))}
    </div>
  )
}
