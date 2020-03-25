import { useDispatch } from "react-redux"
import axios from "axios"

const REGISTER = "register/REGISTER"
// const RPROFILE = "register/RPROFILE"

const initialState = {
  register: {}
  // rprofile: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...state, register: action.payload }
    // case RPROFILE:
    //   return { ...state, rprofile: action.payload }
    default:
      return state
  }
}

function registerClients(username, password, name, website) {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/register", { username, password, name, website })
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}
// function getRProfile(name, website) {
//   return dispatch => {
//     axios.get("/api/clients", { name, website }).then(resp => {
//       const data = resp.data
//       dispatch({
//         type: GET_RPROFILE,
//         payload: data
//       })
//     })
//   }
// }

export function useRegister() {
  const dispatch = useDispatch()
  // const rprofile = (name, website) => getRProfile(name, website)
  const create = (username, password, name, website) =>
    registerClients(username, password, name, website)

  return { create }
}
