import React, { useState } from "react"
import { useAuth } from "../../lib/react-auth-new.js"

export default (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { signin } = useAuth()

  function handleLogin(e) {
    e.preventDefault()

    signin(username, password).then((resp) => {
      props.props.history.push("/dashboardr")
    })
  }

  return (
    <div className="wrapper">
      <h4>Business Login</h4>
      <form onSubmit={handleLogin}>
        <div className="username">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="password">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {/* <ul className="box-area">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> */}
    </div>
  )
}

// import React, { useState } from "react"
// import { useAuth } from "react-auth"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import "../styles/login.css"

// export default props => {
//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")
//   const { signin } = useAuth()

//   function handleLogin(e) {
//     e.preventDefault()

//     signin(username, password).then(resp => {
//       props.history.push("/jobpost")
//     })
//   }

//   return (
//     <div className="wrapper">
//       <h1> Log In </h1>
//       <form onSubmit={handleLogin}>
//         <div className="username">
//           <input
//             type="text"
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//             placeholder="Username"
//           />
//         </div>
//         <div className="password">
//           <input
//             type="password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             placeholder="Password"
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <ul class="box-area">
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//       </ul>
//     </div>
//   )
// }
