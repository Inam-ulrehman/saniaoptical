import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Wrapper className='logo'>
      <Link to='/'>
        <h3 className='logo-heading'>
          Sania<span className='logo-span'>optical</span>
        </h3>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .logo-heading {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
    color: var(--grey-5);
    :hover {
      cursor: pointer;
    }
    .logo-span {
      color: var(--primary-6);
      margin: 0 -2px;
      :hover {
        color: var(--primary-5);
      }
    }
  }
`
export default Logo
