import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { removeCartFromLocalStorage } from '../../utils/localStorage'
// import { customFetchUser } from '../../utils/axios'

const initialState = {
  firstName: '',
  lastName: '',
  house: '',
  street: '',
  town: '',
  province: '',
  country: '',
  card: '',
  exp: '',
  digit: '',
  mobile: '',
  email: '',
  isLoading: false,
}

export const orderThunk = createAsyncThunk(
  'order/orderThunk',
  async (order, thunkAPI) => {
    // const { email, password, name } = order
    // try {
    //   const response = await customFetchUser.post('/login', {
    //     email,
    //     password,
    //     name,
    //   })
    //   return { ...response.data }
    // } catch (error) {
    //   return thunkAPI.rejectWithValue(error.response.data.msg)
    // }
  }
)
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {},
    getPaymentValue: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
    },
  },

  extraReducers: {
    [orderThunk.pending]: (state, payload) => {
      state.isLoading = true
    },
    [orderThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.firstName = ''
      state.lastName = ''
      state.house = ''
      state.street = ''
      state.town = ''
      state.province = ''
      state.country = ''
      state.card = ''
      state.exp = ''
      state.digit = ''
      state.mobile = ''
      state.email = ''
      toast.success('Thank you for your order.', {
        position: 'top-center',
      })
      state.cart = ''
      removeCartFromLocalStorage()
      // After payment clear state //
    },
    [orderThunk.rejected]: (state, { payload }) => {
      state.isLoading = true
      toast.error(payload, {
        position: 'top-center',
      })
    },
  },
})

export const { createFunction, getPaymentValue } = orderSlice.actions
export default orderSlice.reducer
