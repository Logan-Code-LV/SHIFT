import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useEffect } from "react"

const GET_FREE = "interestedfree/GET_FREE"
const ADD_FREE = "interestedfree/ADD_FREE"

const initialState = {
  interested: [],
  addfree: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FREE:
      return { ...state, interested: action.payload }
    case ADD_FREE:
      return { ...state, addfree: action.payload }
    default:
      return state
  }
}

function getInterested() {
  return dispatch => {
    axios.get("/api/interestedfree").then(resp => {
      const data = resp.data
      dispatch({
        type: GET_FREE,
        payload: data
      })
    })
  }
}
function addInterested(id_job, id_free) {
  return dispatch => {
    console.log(id_job, id_free)
    axios.post("/api/interestedfree", { id_job, id_free }).then(resp => {
      dispatch({
        type: ADD_FREE,
        payload: resp.data
      })
    })
  }
}

export function useAllInterested() {
  const dispatch = useDispatch()
  const addMe = (idjob, idfree) => dispatch(addInterested(idjob, idfree))
  useEffect(() => {
    dispatch(getInterested())
  }, [dispatch])

  return { addMe }
}
