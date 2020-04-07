import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useEffect } from "react"

const VIEWJOBPOSTS = "jobpost/VIEWJOBPOSTS"
const GETID = "jobpost/GETID"
const initialState = {
  viewjobs: [],
  rest_id: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case VIEWJOBPOSTS:
      return { ...state, viewjobs: action.payload }
    case GETID:
      return { ...state, rest_id: action.payload }
    default:
      return state
  }
}

function getJobs(restid) {
  console.log(restid)
  return dispatch => {
    axios.get("/api/jobpost/" + restid).then(resp => {
      dispatch({
        type: VIEWJOBPOSTS,
        payload: resp.data
      })
    })
  }
}
function getUserId(username) {
  return dispatch => {
    axios.get("/api/getid/" + username).then(resp => {
      dispatch({
        type: GETID,
        payload: resp.data
      })
    })
  }
}
export function useJobs(username) {
  const dispatch = useDispatch()
  const view = useSelector(appState => appState.viewpostState.viewjobs)
  const restid = useSelector(appState => appState.viewpostState.rest_id)
  // const get = restid => dispatch(getJobs(restid))
  useEffect(() => {
    dispatch(getUserId(username))
    dispatch(getJobs(restid))
  }, [dispatch, restid])
  return { view, restid }
}
