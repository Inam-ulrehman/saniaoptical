import { React, useEffect } from 'react'
import styled from 'styled-components'
import { LandingPageOne } from '../components/LandingPage/LandingPageOne'
import LandingPageThree from '../components/LandingPage/LandingPageThree'
import LandingPageTwo from '../components/LandingPage/LandingPageTwo'
import LandingPolicy from '../components/LandingPage/LandingPolicy'
import GoogleApi from '../components/GoogleApi'
import Footer from '../components/Footer/Footer'

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <Wrapper>
      <LandingPageOne />
      <LandingPolicy />
      <LandingPageTwo />
      <LandingPageThree />
      <GoogleApi />
      <Footer />
    </Wrapper>
  )
}
const Wrapper = styled.section``

export default LandingPage
