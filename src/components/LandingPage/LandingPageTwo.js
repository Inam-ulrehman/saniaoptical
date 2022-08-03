import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { gender } from '../../utils/data'
import 'animate.css'

const LandingPageTwo = () => {
  return (
    <Wrapper>
      <h1 className='animate__animated animate__flipInX animate__slower animate__infinite'>
        Eyewear for Everyone
      </h1>
      <p className='title-header'>
        Get a complete pair of prescription glasses starting at $9.95.
      </p>
      <div className='container-img'>
        {gender.map((item) => {
          return (
            <article className='cart-holder' key={item.id}>
              <div className='img-holder'>
                <img src={item.link} alt='' />
              </div>
              <Link to='/products' className='btn btn-block'>
                {item.title}
              </Link>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .title-header {
    margin: 0 auto;
  }
  text-align: center;
  .img-holder {
    max-width: 300px;
    max-height: 300px;
    margin: auto;
    margin-top: 1rem;

    img {
      max-height: 300px;
      overflow: hidden;
      width: 100%;
      object-fit: cover;
    }
  }
  .btn {
    max-width: 300px;
  }

  @media (min-width: 768px) {
    .container-img {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
  }
`
export default LandingPageTwo
