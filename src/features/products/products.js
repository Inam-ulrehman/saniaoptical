import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customFetchProducts } from '../../utils/axios'

const initialState = {
  products: [],
  copyProducts: [],
  isLoading: false,
  totalProducts: '',
}

// Creating Api just using user name instead of api

export const getProductsThunk = createAsyncThunk(
  'user/getProductsThunk',
  async (_, thunkAPI) => {
    try {
      const response = await customFetchProducts.get('/products/static')

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response)
    }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {},
  },

  extraReducers: {
    [getProductsThunk.pending]: (state, payload) => {
      state.isLoading = true
    },
    [getProductsThunk.fulfilled]: (state, { payload }) => {
      const { nbHits, products } = payload

      state.totalProducts = nbHits
      state.products = products
      state.copyProducts = state.products
      state.isLoading = false
    },
    [getProductsThunk.rejected]: (state, payload) => {
      state.isLoading = false
    },
  },
})

export const { createFunction } = productsSlice.actions
export default productsSlice.reducer
