import { React, useEffect } from 'react'
import styled from 'styled-components'
import GoogleApi from '../components/GoogleApi'
import { aboutUsData } from '../utils/data'

const About = () => {
  const aboutImg =
    'https://firebasestorage.googleapis.com/v0/b/glasshouse-120.appspot.com/o/Untitled%20design.png?alt=media&token=2a21816d-3393-4567-a982-ba5116557360'
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <Wrapper>
      <div className='image-holder'>
        <img src={aboutImg} alt='' />
        <div className='style'></div>
      </div>

      {aboutUsData.map((item) => {
        return (
          <div key={item.id}>
            <h3 style={{ color: 'var(--primary-5)' }}>{item.heading}</h3>
            <p>{item.paragraph}</p>
          </div>
        )
      })}

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
  @media (max-width: 768px) {
    .image-holder {
      margin-top: 4rem;
    }
  }
`
export default About
