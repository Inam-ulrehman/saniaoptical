import React from 'react'
import { NavLink } from 'react-router-dom'

const MobileNavbarComponent = ({ path, title, values, setValues }) => {
  return (
    <li>
      <NavLink onClick={() => setValues(!values)} to={path}>
        {title}
      </NavLink>
    </li>
  )
}

export default MobileNavbarComponent
