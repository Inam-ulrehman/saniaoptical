import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LandingPageThreeHolder = ({ id, image }) => {
  return (
    <Wrapper className='item'>
      <Link to={`/products/${id}`} type='submit'>
        <img src={image} alt='' />
      </Link>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin-right: 10px;
  img {
    max-height: 200px;
    object-fit: cover;
  }
`

export default LandingPageThreeHolder
