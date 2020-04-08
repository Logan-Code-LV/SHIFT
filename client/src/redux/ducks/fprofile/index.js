import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useEffect } from "react"

const GET_FREEID = "register/GET_FREEID"

const initialState = {
  freeid: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FREEID:
      return { ...state, freeid: action.payload }
    default:
      return state
  }
}

function getFreeId(username) {
  return dispatch => {
    axios.get("/api/getfreeid/" + username).then(resp => {
      dispatch({
        type: GET_FREEID,
        payload: resp.data
      })
    })
  }
}

export function useProfilefree(username) {
  const dispatch = useDispatch()
  const free_id = useSelector(appState => appState.fprofileState.freeid)

  useEffect(() => {
    dispatch(getFreeId(username))
  }, [dispatch])
  return { free_id }
}
