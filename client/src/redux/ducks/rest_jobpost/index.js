import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const JOB_POST = "jobpost/JOB_POST"

const initialState = {
  jobpost: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case JOB_POST:
      return { ...state, jobpost: action.payload }
    default:
      return state
  }
}

function createPost(job) {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/jobpost", job)
      .then((resp) => {
        resolve(resp.data)
      })
      .catch((e) => {
        reject()
      })
  })
}

export function usePost() {
  // const dispatch = useDispatch()
  const createJob = (job) => createPost(job)

  return { createJob }
}
