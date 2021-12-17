import { createReducer } from '@reduxjs/toolkit'
import {
  KEY_STORAGE_CART,
  KEY_STORAGE_PRODUCT,
  KEY_STORAGE_RANDOM,
  KEY_STORAGE_USER,
} from '../../../common/constant'
import { UPDATE_CART, UPDATE_QTY } from '../action'

export const dataUserRedux = createReducer([], {
  [KEY_STORAGE_USER.SET_DATA_USER](state, action) {
    return action.payload
  },
})
export const dataRandomRedux = createReducer([], {
  [KEY_STORAGE_RANDOM.SET_DATA_RANDOM](state, action) {
    return action.payload
  },
})
export const dataProductRedux = createReducer([], {
  [KEY_STORAGE_PRODUCT.SET_DATA_PRODUCT](state, action) {
    return action.payload
  },
})

export const addCartRedux = createReducer([], {
  [KEY_STORAGE_CART.SET_DATA_CART](state, action) {
    return action.payload
  },
})
const initialState = {
  cart: [],
  qty: 0,
  total: 0,
  delivery: 5,
}
export const cartReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_CART':
      const newList = state.cart
      if (
        action.payload._id !=
        newList.filter((item) => {
          item._id
        })
      )
        newList.push(action.payload)

      // let existedItem = state.cart.filter(
      //   (cartItem) => cartItem._id === action.payload._id
      // )
      // existedItem[0].qty = action.payload.qty
      return {
        ...state,
        cart: existedItem,
        // how to get rid of mutation here?
      }
    case 'DELETE_CART':
      const newListCart = state.cart
      const newListCartDeleted = newListCart.filter(
        (item) => item._id != action.payload
      )

      return { ...state, cart: newListCartDeleted }
    default:
      return state
  }
}
