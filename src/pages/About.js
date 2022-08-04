import { React, useEffect } from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'
import aboutUs from '../images/aboutus.svg'
import 'animate.css'
import GoogleApi from '../components/GoogleApi'

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <Wrapper>
      <div className='image-holder'>
        <img src={aboutUs} alt='' />
        <div
          className='hero-text animate__animated 
        animate__bounceInDown
        animate__slower'
        >
          <Logo />
        </div>
      </div>
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
    }
  }
`
export default About
