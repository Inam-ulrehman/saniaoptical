import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cart/cartSlice'
import productsSlice from './features/products/productsSlice'
import userSlice from './features/user/userSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    products: productsSlice,
    cart: cartSlice,
  },
})

export default store
