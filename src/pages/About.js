import { React, useEffect } from 'react'
import styled from 'styled-components'

import 'animate.css'
import GoogleApi from '../components/GoogleApi'

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <Wrapper>
      <div className='image-holder'></div>
      <div className='style'></div>
      <GoogleApi />
    </Wrapper>
  )
}
const Wrapper = styled.article`
  .image-holder {
    position: relative;
    max-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
    img {
      margin: 0 auto;
      max-height: 100vh;
      width: 100%;
      object-fit: cover;
    }
  }
`
export default About
