import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customFetch } from '../../utils/axios'

const initialState = {
  name: '',
  price: '',
  image: '',
  company: '',
  description: '',
  category: '',
  shipping: '',
  quantity: '',
}

// Creating Api just using user name instead of api

export const userThunk = createAsyncThunk(
  'user/userThunk',
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post('/products', user)
      console.log(response)
    } catch (error) {
      console.log(error.response)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {},
  },

  extraReducers: {
    [userThunk.pending]: (state, payload) => {
      state.loading = true
    },
    [userThunk.fulfilled]: (state, payload) => {
      state.loading = false
    },
    [userThunk.rejected]: (state, payload) => {
      state.loading = false
    },
  },
})

export const { createFunction } = userSlice.actions
export default userSlice.reducer
