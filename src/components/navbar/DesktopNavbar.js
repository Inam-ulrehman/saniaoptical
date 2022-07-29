import React from 'react'
import { navbarData } from '../../utils/data'

import DesktopNavbarComponent from './DesktopNavbarComponent'
import DesktopNavbarWrapper from '../../wrappers/DesktopNavbarWrapper'
import Logo from '../Logo'

const DesktopNavbar = () => {
  return (
    <DesktopNavbarWrapper>
      <div className='nav-container'>
        <div className='logo-container'>
          <Logo />
        </div>

        <div className='navbar'>
          <ul>
            {navbarData.map((item) => {
              return <DesktopNavbarComponent key={item.id} {...item} />
            })}
          </ul>
        </div>
      </div>
    </DesktopNavbarWrapper>
  )
}

export default DesktopNavbar
