import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetchProducts from '../../utils/axios'

const initialState = {
  cart: [],
  isLoading: false,
  cartItems: [],
  total: 0,
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
  name: 'products',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {},
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
export const { createFunction } = cartSlice.actions

export default cartSlice.reducer
