import { useDispatch, useSelector } from "react-redux"
import axios from "axios"

const VIEWJOBPOSTS = "jobpost/VIEWJOBPOSTS"

const initialState = {
  viewjobs: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case VIEWJOBPOSTS:
      return { ...state, viewjobs: action.payload }
    default:
      return state
  }
}

function getJobs(restname, jobdesc, pay) {
  return dispatch => {
    axios.get("/api/jobpost/", { restname, jobdesc, pay }).then(resp => {
      const data = resp.data
      console.log(data)
      dispatch({
        type: VIEWJOBPOSTS,
        payload: data
      })
    })
  }
}

export function useJobs() {
  const dispatch = useDispatch()
  const viewpost = (restname, jobdesc, pay) => getJobs(restname, jobdesc, pay)
  const view = useSelector(appState => appState.viewpostState.viewjobs)

  return { viewpost, view }
}
