import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useEffect } from "react"

const GET_JOBS = "jobpost/GET_JOBS"

const initialState = {
  jobs: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return { ...state, jobs: action.payload }
    default:
      return state
  }
}

function getTheJob() {
  return dispatch => {
    axios.get("/api/viewjobs").then(resp => {
      const data = resp.data
      console.log(data)
      dispatch({
        type: GET_JOBS,
        payload: data
      })
    })
  }
}

export function useTheJob() {
  const dispatch = useDispatch()
  const free = useSelector(appState => appState.thejobState.jobs)
  const get = () => dispatch(getTheJob())

  return { free, get }
}
