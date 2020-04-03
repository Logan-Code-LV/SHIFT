import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useEffect } from "react"

const VIEWJOBPOSTS = "jobpost/VIEWJOBPOSTS"
const GETID = "jobpost/GETID"
const INTERESTED = "jobpost/INTERESTED"

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

function getJobs(restID) {
  return dispatch => {
    axios.get("/api/jobpost/" + restID).then(resp => {
      console.log(resp.data)
      dispatch({
        type: VIEWJOBPOSTS,
        payload: resp.data
      })
    })
  }
}
function getUserId(username) {
  console.log(username)
  return dispatch => {
    axios.get("/api/getid/" + username).then(resp => {
      console.log("data", resp.data)
      dispatch({
        type: GETID,
        payload: resp.data
      })
    })
  }
}

function updateFreelancerInterest(IDs) {
  console.log(IDs)
  return dispatch => {
    axios.post("/api/interestedfree", IDs).then(resp => {
      dispatch({
        type: INTERESTED,
        payload: resp.data
      })
    })
  }
}

export function useJobs(username) {
  const dispatch = useDispatch()
  const view = useSelector(appState => appState.viewpostState.viewjobs)
  const getId = username => dispatch(getUserId(username))
  const restId = useSelector(appState => appState.viewpostState.restId)
  const get = restId => dispatch(getJobs(restId))
  const updateInterest = IDs => dispatch(updateFreelancerInterest(IDs))

  console.log("username", username)

  useEffect(() => {
    dispatch(getUserId(username))
    dispatch(getJobs(restId))
  }, [dispatch, restId])

  return { view, restId, get, updateInterest }
}
