import React, { useState, useEffect } from "react"
import { useAllInterested } from "../hooks"

export default props => {
  const { select } = useAllInterested()

  return (
    <div>
      <h1>SHIFT</h1>
      {select.map(item => (
        <div>
          <h3>{item.firstname}</h3>
          <h5>{item.lastname}</h5>
          <h5>{item.jobposition}</h5>
          <h5>{item.qualifications}</h5>
          <button>select</button>
        </div>
      ))}
    </div>
  )
}
