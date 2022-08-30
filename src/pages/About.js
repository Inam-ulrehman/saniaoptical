import { React, useEffect } from 'react'
import styled from 'styled-components'
import GoogleApi from '../components/GoogleApi'
import { aboutUsData } from '../utils/data'

const About = () => {
  const aboutImg =
    'https://firebasestorage.googleapis.com/v0/b/burger-queen-6b0d2.appspot.com/o/Untitled%20design%20(1)_800x800.png?alt=media&token=56acd09a-fd33-424c-9bac-d54bf13eb0ec'
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
