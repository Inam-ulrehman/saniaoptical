import { React, useEffect } from 'react'
import styled from 'styled-components'
import contact from '../images/contact.svg'
import GoogleApi from '../components/GoogleApi'
import Logo from '../components/Logo'

//  handle Submit
const handleSubmit = (e) => {
  e.preventDefault()
}

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <Wrapper>
      <div className='heading-holder'>
        <h1 className='title animate__backInUp'>
          Contact <span className='span'> / Us</span>
        </h1>
        <img src={contact} alt='' />
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <Logo />
        {/* name input */}
        <div>
          <label className='form-label' htmlFor='name'>
            First Name
          </label>
          <input className='form-input' type='text' />
        </div>

        {/* name input */}
        <div>
          <label className='form-label' htmlFor='name'>
            Last Name
          </label>
          <input className='form-input' type='text' />
        </div>

        {/* name input */}
        <div>
          <label className='form-label' htmlFor='name'>
            Email
          </label>
          <input className='form-input' type='text' />
        </div>

        {/* name input */}
        <div>
          <label className='form-label' htmlFor='name'>
            Message
          </label>
          <input className='form-input' type='text' />
        </div>

        {/* name input */}
        <div>
          <label className='form-label' htmlFor='name'>
            Additional Details
          </label>
          <textarea rows='7' cols='50' className='form-input' type='text' />
        </div>
        <button className='btn btn-block' type='submit'>
          Submit your request
        </button>
      </form>
      <div className='style'></div>
      <GoogleApi />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .title {
    span {
      color: var(--primary-5);
    }
  }
  .heading-holder {
    text-align: center;
    img {
      max-width: 300px;
    }
  }
`
export default Contact
