import React, { useState, useEffect } from "react"
import { useTheJob } from "../hooks"

export default props => {
  const { free } = useTheJob()

  return (
    <div>
      <h1>SHIFT</h1>
      {free.map(item => (
        <div>
          <h3>{item.restname}</h3>
          <h5>{item.jobdesc}</h5>
          <h5>{item.pay}</h5>
          <button>select</button>
        </div>
      ))}
    </div>
  )
}
