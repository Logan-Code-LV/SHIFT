// 1. imports
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// 2. action definitions
const ADD_ITEM = "cart/ADD_ITEM"
const DEL_ITEM = "cart/DEL_ITEM"
const TOGGLE_CART = "cart/TOGGLE_CART"

// 3. initial state
const initialState = {
  cart: [],
  isOpen: false
}
// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, cart: [...state.cart, action.payload] }
    case TOGGLE_CART:
      return { ...state, isOpen: !state.isOpen }
    default:
      return state
  }
}
// 5. action creators

function addJob(view) {
  return dispatch => {
    // const data = resp.data
    dispatch({
      type: ADD_ITEM,
      payload: view
    })
  }
}

function toggleCart() {
  return {
    type: TOGGLE_CART
  }
}

// 6. custom hook
export function useItems() {
  const dispatch = useDispatch()
  const cart = useSelector(appState => appState.cartState.cart)
  const isOpen = useSelector(appState => appState.cartState.isOpen)
  const add = view => dispatch(addJob(view))
  const toggle = () => dispatch(toggleCart())

  useEffect(() => {
    console.log(cart)
  }, [])

  return { cart, add, isOpen, toggle }
}
