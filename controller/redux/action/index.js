import { createAction } from '@reduxjs/toolkit'
import {
  KEY_STORAGE_CART,
  KEY_STORAGE_PRODUCT,
  KEY_STORAGE_RANDOM,
  KEY_STORAGE_USER,
} from '../../../common/constant'

export const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY'
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT'
export const GET_NUMBER_CART = 'GET_NUMBER_CART'
export const ADD_CART = 'ADD_CART'
export const UPDATE_CART = 'UPDATE_CART'
export const DELETE_CART = 'DELETE_CART'

export const setDataProductRedux = createAction(KEY_STORAGE_PRODUCT.SET_DATA_PRODUCT)
export const setDataUserRedux = createAction(KEY_STORAGE_USER.SET_DATA_USER)
export const setDataCartRedux = createAction(KEY_STORAGE_CART.SET_DATA_CART)
export const setDataRandomRedux = createAction(KEY_STORAGE_RANDOM.SET_DATA_RANDOM)

/*GET NUMBER CART*/
export function GetNumberCart() {
  return {
    type: 'GET_NUMBER_CART',
  }
}

export function AddCart(payload) {
  console.log(payload)
  return {
    type: 'ADD_CART',
    payload,
  }
}
export function UpdateCart(payload) {
  return {
    type: 'UPDATE_CART',
    payload,
  }
}
export function DeleteCart(payload) {
  return {
    type: 'DELETE_CART',
    payload,
  }
}

export function IncreaseQuantity(payload) {
  return {
    type: 'INCREASE_QUANTITY',
    payload,
  }
}
export function DecreaseQuantity(payload) {
  return {
    type: 'DECREASE_QUANTITY',
    payload,
  }
}
