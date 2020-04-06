import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useEffect } from "react"

const GET_FREE = "interestedfree/GET_FREE"

const initialState = {
  interested: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FREE:
      return { ...state, interested: action.payload }
    default:
      return state
  }
}

function getInterested() {
  return (dispatch) => {
    axios.get("/api/interestedfree").then((resp) => {
      const data = resp.data
      dispatch({
        type: GET_FREE,
        payload: data,
      })
    })
  }
}

export function useAllInterested() {
  const dispatch = useDispatch()
  const select = useSelector((appState) => appState.interestedState.interested)
  useEffect(() => {
    dispatch(getInterested())
  }, [dispatch])

  return { select }
}
