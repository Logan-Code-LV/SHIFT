import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const JOB_POST = "jobpost/JOB_POST"
const JOB_POSTS = "jobpost/JOB_POSTS"

const initialState = {
  jobpost: {},
  jobposts: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case JOB_POST:
      return { ...state, jobpost: action.payload }
    case JOB_POSTS:
      return { ...state, jobposts: action.payload }
    default:
      return state
  }
}

function createPost(job) {
  console.log(job)
  return new Promise((resolve, reject) => {
    axios
      .post("/api/jobpost", job)
      .then((resp) => {
        resolve(resp.data)
        console.log(resp.data)
      })
      .catch((e) => {
        reject()
      })
  })
}

export function usePost() {
  // const dispatch = useDispatch()

  const createJob = (job) => createPost(job)

  // useEffect(() => {
  //   dispatch(getUserId(username))
  //   dispatch(getJobs(restId))
  // }, [dispatch, restId])

  return { createJob }
}
