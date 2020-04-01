import React from "react"
import { useJobs } from "../hooks"
import { useItems } from "../hooks"

export default function(e) {
  const { cart, toggle, isOpen } = useItems()

  return (
    <div className="cart">
      {isOpen ? <h1>OPEN</h1> : <h1>CLOSED</h1>}
      <button onClick={e => toggle()}></button>

      {cart.map(item => (
        <div>
          <p>{item.restname}</p>
          <p>{item.jobdesc}</p>
          <p>{item.pay}</p>
        </div>
      ))}
    </div>
  )
}
