import React from 'react'
import { NavLink } from 'react-router-dom'

const SharedNavbar = ({ path, title }) => {
  return (
    <li>
      <NavLink to={path}>{title}</NavLink>
    </li>
  )
}

export default SharedNavbar
