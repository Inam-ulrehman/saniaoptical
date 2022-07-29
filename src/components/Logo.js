import React from 'react'
import styled from 'styled-components'

const Logo = () => {
  return (
    <Wrapper className='logo'>
      <h3 className='logo-heading'>
        Sania<span className='logo-span'>optical</span>
      </h3>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .logo-heading {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
    color: var(--grey-5);
    .logo-span {
      color: var(--primary-6);
      margin: 0 -2px;
    }
  }
`
export default Logo
