import { useDispatch } from "react-redux"
import axios from "axios"

const REGISTER = "register/REGISTER"

const initialState = {
  register: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...state, register: action.payload }
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

export function useRegister() {
  const dispatch = useDispatch()
  const create = (username, password, name, website) =>
    registerClients(username, password, name, website)

  return { create }
}
