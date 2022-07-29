import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './features/products/products'
import userSlice from './features/user/userSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    products: productsSlice,
  },
})

export default store
