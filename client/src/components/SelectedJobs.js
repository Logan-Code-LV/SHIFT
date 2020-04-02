import React, { useEffect } from "react"
import { useJobs } from "../hooks"
import { useItems } from "../hooks"

export default function(e) {
  const { cart, toggle, isOpen } = useItems()

  return (
    <div className="carttitle">
      <h3>Selected SHIFTs!</h3>
      <div className="cart">
        {cart.map(item => (
          <div className="cartitem" key={`cartitem-${item.id}`}>
            <p className="jobname">{item.restname}</p>
            <p className="jobdesc">{item.jobdesc}</p>
            <p className="jobpay">{item.pay}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
