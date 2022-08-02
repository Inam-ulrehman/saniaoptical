import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { removeCart } from '../features/cart/cartSlice'
import { getPaymentValue, orderThunk } from '../features/order/orderSlice'

const CheckOutPayment = () => {
  const dispatch = useDispatch()
  const { order } = useSelector((state) => {
    return state
  })
  const {
    card,
    country,
    exp,
    digit,
    email,
    firstName,
    house,
    lastName,
    mobile,
    province,
    street,
    town,
  } = order

  // const handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(orderThunk())
    dispatch(removeCart())
  }
  // Const handleChange
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getPaymentValue({ name, value }))
  }

  return (
    <Wrapper className='container'>
      <div className='form-holder'>
        <h2 className='title head-title'>payment</h2>
        <form onSubmit={handleSubmit}>
          {/* first name Input */}
          <div>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={handleChange}
            />
          </div>
          {/* last Name Input */}
          <div>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={lastName}
              onChange={handleChange}
            />
          </div>
          {/* house Input */}
          <div>
            <label htmlFor='house'>House / Apt NO</label>
            <input
              type='text'
              id='house'
              name='house'
              value={house}
              onChange={handleChange}
            />
          </div>
          {/* street Input */}
          <div>
            <label htmlFor='street'>Street Name</label>
            <input
              type='text'
              id='street'
              name='street'
              value={street}
              onChange={handleChange}
            />
          </div>
          {/* Town Input */}
          <div>
            <label htmlFor='town'>Town</label>
            <input
              type='text'
              id='town'
              name='town'
              value={town}
              onChange={handleChange}
            />
          </div>
          {/* province Input */}
          <div>
            <label htmlFor='province'>Province</label>
            <input
              type='text'
              id='province'
              name='province'
              value={province}
              onChange={handleChange}
            />
          </div>
          {/* country Input */}
          <div>
            <label htmlFor='country'>Country</label>
            <input
              type='text'
              id='country'
              name='country'
              value={country}
              onChange={handleChange}
            />
          </div>
          {/* card Input */}
          <div>
            <label htmlFor='card'>Card No</label>
            <input
              type='number'
              id='card'
              name='card'
              value={card}
              onChange={handleChange}
            />
          </div>
          {/* exp Input */}
          <div>
            <label htmlFor='exp'>Expiry Date</label>
            <input
              type='number'
              id='exp'
              name='exp'
              value={exp}
              onChange={handleChange}
            />
          </div>
          {/* digit Input */}
          <div>
            <label htmlFor='digit'>3 Digits - cvv</label>
            <input
              type='number'
              id='digit'
              name='digit'
              value={digit}
              onChange={handleChange}
            />
          </div>
          {/* name Input */}
          <div>
            <label htmlFor='mobile'>Mobile or Home No</label>
            <input
              type='number'
              id='mobile'
              name='mobile'
              value={mobile}
              onChange={handleChange}
            />
          </div>
          {/* name Input */}
          <div>
            <label htmlFor='name'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn'>
            Place your order
          </button>
        </form>
      </div>
      <div>
        <h1>hello</h1>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`
export default CheckOutPayment
