import {
  setDataCartRedux,
  setDataProductRedux,
  setDataRandomRedux,
  setDataUserRedux,
} from '../controller/redux/action'
import { store } from '../controller/redux/store/configureStore'
import { getProduct, getUser } from '../pages/api/services'

export const intervalRedux = () => {
  setInterval(() => {
    const number = Math.random()
    store.dispatch(setDataRandomRedux(number))
  }, 10000)
}
export const refreshUserDataGlobal = async () => {
  const dataUser = await getUser()
  store.dispatch(setDataUserRedux(dataUser))
}
export const refreshProductDataGlobal = async () => {
  const dataProduct = await getProduct()
  store.dispatch(setDataProductRedux(dataProduct))
}

export const cartDataGlobal = (item) => {
  const dataCart = {
    name: 'asdasd',
    price: 'asdasd',
  }
  store.dispatch(setDataCartRedux(dataCart))
}
