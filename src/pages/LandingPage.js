import React from 'react'
import styled from 'styled-components'
import { LandingPageOne } from '../components/LandingPage/LandingPageOne'
import LandingPageTwo from '../components/LandingPage/LandingPageTwo'
import LandingPolicy from '../components/LandingPage/LandingPolicy'

const LandingPage = () => {
  return (
    <Wrapper>
      <LandingPageOne />
      <LandingPolicy />
      <LandingPageTwo />
    </Wrapper>
  )
}
const Wrapper = styled.section``

export default LandingPage
