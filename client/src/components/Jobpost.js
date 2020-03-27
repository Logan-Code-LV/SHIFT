import React, { useState } from "react"
import { usePost } from "../hooks"

export default props => {
  const [restname, setRestname] = useState("")
  const [jobdesc, setJobdesc] = useState("")
  const [pay, setPay] = useState("")

  const { createJob } = usePost()

  function handleSubmit(e) {
    e.preventDefault()

    createJob({ restname, jobdesc, pay }).then(resp => {
      props.history.push("/Viewfreelancers")
    })
  }

  return (
    <div className="register">
      <h1>Get Your Shift Covered</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={restname}
          onChange={e => setRestname(e.target.value)}
          placeholder="Restaurant Name"
        />{" "}
        <br></br>
        <input
          type="text"
          value={jobdesc}
          onChange={e => setJobdesc(e.target.value)}
          placeholder="Job Description"
        />
        <br></br>
        <input
          type="text"
          value={pay}
          onChange={e => setPay(e.target.value)}
          placeholder="Pay"
        ></input>
        <br></br>
        <button type="submit">Submit Job</button>
      </form>
      <ul class="box-area">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

// import React, { useState } from "react"
// import { usePost } from "../hooks"

// export default props => {
//   const [restname, setRestname] = useState("")
//   const [jobdesc, setJobdesc] = useState("")
//   const [pay, setPay] = useState("")

//   const { create } = usePost()

//   function handleSubmit(e) {
//     e.preventDefault()
//     create({ restname, jobdesc, pay }).then(resp => {
//       props.history.push("/Viewfreelancers")
//     })
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Restaurant Name</label>
//           <input
//             type="text"
//             value={restname}
//             onChange={e => setRestname(e.target.value)}
//             palceholder="Posting Name"
//           />
//           <label>Job Description</label>
//           <textarea
//             onChange={e => setJobdesc(e.target.value)}
//             value={jobdesc}
//           ></textarea>
//           <label>Pay</label>
//           <input
//             type="text"
//             value={pay}
//             onChange={e => setPay(e.target.value)}
//             palceholder="Pay"
//           />
//           <button type="submit">Create Job</button>
//         </div>
//       </form>
//     </div>
//   )
// }
