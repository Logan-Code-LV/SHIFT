import { useDispatch } from "react-redux"
import axios from "axios"

const FREE_REGISTER = "register/FREE_REGISTER"

const initialState = {
  registration: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FREE_REGISTER:
      return { ...state, registration: action.payload }
    // case RPROFILE:
    //   return { ...state, rprofile: action.payload }
    default:
      return state
  }
}

function registerFreelancers(
  username,
  password,
  firstname,
  lastname,
  jobposition,
  qualifications
) {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/registerfree", {
        username,
        password,
        firstname,
        lastname,
        jobposition,
        qualifications
      })
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}

export function useRegisterfree() {
  const dispatch = useDispatch()

  const free = (
    username,
    password,
    firstname,
    lastname,
    jobposition,
    qualifications
  ) =>
    registerFreelancers(
      username,
      password,
      firstname,
      lastname,
      jobposition,
      qualifications
    )

  return { free }
}
