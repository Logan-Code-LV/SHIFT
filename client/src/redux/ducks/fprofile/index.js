import { useDispatch, useSelector } from "react-redux"
import axios from "axios"

const GET_FPROFILE = "register/GET_FPROFILE"

const initialState = {
  freelancer: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FPROFILE:
      return { ...state, freelancer: action.payload }
    default:
      return state
  }
}

function getFProfile(username) {
  return dispatch => {
    axios.get("/api/profilefree/" + username).then(resp => {
      const data = resp.data
      console.log(data)
      dispatch({
        type: GET_FPROFILE,
        payload: data
      })
    })
  }
}

export function useProfilefree() {
  const dispatch = useDispatch()
  const fprofile = username => dispatch(getFProfile(username))
  const free = useSelector(appState => appState.fprofileState.freelancer)

  return { fprofile, free }
}
