import { useDispatch, useSelector } from "react-redux"
import axios from "axios"

const GET_RPROFILE = "register/GET_RPROFILE"

const initialState = {
  restaurant: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RPROFILE:
      return { ...state, restaurant: action.payload }
    default:
      return state
  }
}

function getRProfile(username) {
  return dispatch => {
    axios.get("/api/profile/" + username).then(resp => {
      const data = resp.data
      console.log(data)
      dispatch({
        type: GET_RPROFILE,
        payload: data
      })
    })
  }
}

export function useProfile() {
  const dispatch = useDispatch()
  const rprofile = username => dispatch(getRProfile(username))
  const rest = useSelector(appState => appState.rprofileState.restaurant)

  return { rprofile, rest }
}
