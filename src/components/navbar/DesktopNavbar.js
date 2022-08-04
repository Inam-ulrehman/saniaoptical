import React from 'react'
import { navbarData } from '../../utils/data'
import DesktopNavbarComponent from './DesktopNavbarComponent'
import DesktopNavbarWrapper from '../../wrappers/DesktopNavbarWrapper'
import Logo from '../Logo'
import LogOut from './LogOut'
import styled from 'styled-components'

const DesktopNavbar = () => {
  return (
    <DesktopNavbarWrapper>
      <Wrapper className='nav-container'>
        <div className='logo-container'>
          <Logo />
        </div>
        <LogOut />
        <div className='navbar'>
          <ul>
            {navbarData.map((item) => {
              return <DesktopNavbarComponent key={item.id} {...item} />
            })}
          </ul>
        </div>
      </Wrapper>
    </DesktopNavbarWrapper>
  )
}
const Wrapper = styled.div`
  .btn {
    padding-top: 10px;
    padding-bottom: 26px;
    height: 2rem;
    margin-top: 0.7rem;
  }
`
export default DesktopNavbar
