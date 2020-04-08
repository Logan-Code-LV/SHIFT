import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useEffect } from "react"

const GET_FREE = "interestedfree/GET_FREE"
const ADD_FREE = "interestedfree/ADD_FREE"

const initialState = {
  interested: [],
<<<<<<< HEAD
  addfree: {},
=======
>>>>>>> master
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FREE:
      return { ...state, interested: action.payload }
    default:
      return state
  }
}

<<<<<<< HEAD
function getInterested(id_free) {
  return (dispatch) => {
    axios.get("/api/interestedfree" + id_free).then((resp) => {
      const data = resp.data
      console.log(data)
=======
function getInterested(interestedid) {
  return (dispatch) => {
    axios.get("/api/showinterestedfree/" + interestedid).then((resp) => {
      const data = resp.data
>>>>>>> master
      dispatch({
        type: GET_FREE,
        payload: resp.data,
      })
    })
  }
}
function addInterested(id_job, id_free) {
  return (dispatch) => {
    console.log(id_job, id_free)
    axios.post("/api/interestedfree", { id_job, id_free }).then((resp) => {
      dispatch({
        type: ADD_FREE,
        payload: resp.data,
      })
    })
  }
}

export function useAllInterested() {
  const dispatch = useDispatch()
  const addMe = (idjob, idfree) => dispatch(addInterested(idjob, idfree))
  const showFree = useSelector(
    (appState) => appState.interestedState.interested
  )
  const getFree = (restId) => dispatch(getInterested(restId))

  return { addMe, showFree, getFree }
}
