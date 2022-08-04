import { React, useEffect } from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'

import 'animate.css'
import GoogleApi from '../components/GoogleApi'

const About = () => {
  const aboutUs =
    'https://res.cloudinary.com/inam6530/image/upload/v1659628330/Beige_Elegant_Premium_Glasses_for_Men_Instagram_Post_1_x6li3l.png'
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
      object-fit: cover;
    }
  }
`
export default About
