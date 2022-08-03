import React from 'react'
import styled from 'styled-components'
import { LandingPageOne } from '../components/LandingPage/LandingPageOne'
import LandingPolicy from '../components/LandingPage/LandingPolicy'

const LandingPage = () => {
  return (
    <Wrapper>
      <LandingPageOne />
      <LandingPolicy />
    </Wrapper>
  )
}
const Wrapper = styled.section``

export default LandingPage
