import React from 'react'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getAllProductsThunk } from './features/products/productsSlice'
import {
  SharedLayout,
  LandingPage,
  ErrorPage,
  About,
  Contact,
  Cart,
  User,
  Products,
  SingleProduct,
  Dashboard,
} from './pages'
import { useDispatch } from 'react-redux'
import { ProtectedRoute } from './components'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProductsThunk())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<LandingPage />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<Cart />} />
          <Route path='user' element={<User />} />
          <Route path='Products' element={<Products />} />
          <Route path='/Products/:Id' element={<SingleProduct />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
