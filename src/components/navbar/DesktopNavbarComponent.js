import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SharedNavbar = ({ path, title, icon }) => {
  return (
    <Wrapper>
      <NavLink to={path}>
        {title} {icon}
      </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  a {
    color: var(--grey-5);
    transition: var(--transition);
    padding: 7px !important;
    margin-left: 2px;
    :hover {
      background-color: var(--primary-3);
      color: var(--white);
      border-radius: var(--radius);
      transition: var(--transition);
    }
  }
  .active {
    background-color: var(--primary-3);
    color: var(--white);
    border-radius: var(--radius);
    transition: var(--transition);
  }
`
export default SharedNavbar
