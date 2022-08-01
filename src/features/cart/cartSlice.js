import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import customFetchProducts from '../../utils/axios'
import {
  getCartFromLocalStorage,
  setCartInLocalStorage,
} from '../../utils/localStorage'

const initialState = {
  cart: getCartFromLocalStorage() || [],
  isLoading: false,
  cartItems: [],
  totalItems: 0,
  totalBill: '',
}

export const cartThunk = createAsyncThunk(
  'product/cartThunk',
  async (_, thunkAPI) => {
    try {
      const resp = await customFetchProducts.get()
      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {},
    addToCartButton: (state, { payload }) => {
      state.cart = [...state.cart, payload]
      setCartInLocalStorage(state.cart)
    },
  },
  // =============Cart fetch start here ===================
  extraReducers: {
    [cartThunk.pending]: (state) => {
      state.isLoading = true
    },
    [cartThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
    },
    [cartThunk.rejected]: (state) => {
      state.isLoading = false
    },
  },
})
// ================ All actions starts here =============
export const { createFunction, addToCartButton } = cartSlice.actions

export default cartSlice.reducer