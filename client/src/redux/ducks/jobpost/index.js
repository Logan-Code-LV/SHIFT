import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const JOB_POST = "jobpost/JOB_POST"

const initialState = {
  jobpost: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case JOB_POST:
      return { ...state, jobpost: action.payload }
    default:
      return state
  }
}

function getPost(id) {
  return dispatch => {
    axios.get("/api/jobpost/" + id).then(resp => {
      dispatch({
        type: JOB_POST,
        payload: resp.data[0]
      })
    })
  }
}

function createPost(restname, jobdesc, pay) {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/jobpost", { restname, jobdesc, pay })
      .then(resp => {
        resolve(resp.data.id)
      })
      .catch(e => {
        reject()
      })
  })
}

export function usePost() {
  const dispatch = useDispatch()
  const create = (id, restname, jobdesc, pay) =>
    createPost(id, restname, jobdesc, pay)
  const get = id => dispatch(getPost(id))

  return { create, createPost, get }
}
