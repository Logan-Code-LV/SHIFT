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
  qualifications,
  email,
  phone
) {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/registerfree", {
        username,
        password,
        firstname,
        lastname,
        jobposition,
        qualifications,
        email,
        phone
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
    qualifications,
    email,
    phone
  ) =>
    registerFreelancers(
      username,
      password,
      firstname,
      lastname,
      jobposition,
      qualifications,
      email,
      phone
    )

  return { free }
}
