import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useEffect } from "react"

const VIEWJOBPOSTS = "jobpost/VIEWJOBPOSTS"
const GETID = "jobpost/GETID"
const initialState = {
  viewjobs: [],
  rest_id: "",
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
  return (dispatch) => {
    axios.get("/api/jobpost/" + restID).then((resp) => {
      dispatch({
        type: VIEWJOBPOSTS,
        payload: resp.data,
      })
    })
  }
}
function getUserId(username) {
  return (dispatch) => {
    axios.get("/api/getid/" + username).then((resp) => {
      dispatch({
        type: GETID,
        payload: resp.data,
      })
    })
  }
}
export function useJobs(username) {
  const dispatch = useDispatch()
  //const viewpost = (restname, jobdesc, pay) => getJobs(restname, jobdesc, pay)
  const view = useSelector((appState) => appState.viewpostState.viewjobs)
  const getId = (username) => dispatch(getUserId(username))
  const restId = useSelector((appState) => appState.viewpostState.rest_id)
  const get = (restId) => dispatch(getJobs(restId))
  useEffect(() => {
    dispatch(getUserId(username))
    dispatch(getJobs(restId))
  }, [dispatch, restId])
  return { view, restId, get }
}
