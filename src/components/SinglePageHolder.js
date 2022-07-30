import React from 'react'
import styled from 'styled-components'

const SinglePageHolder = ({
  handleIndex,
  image1,
  image2,
  image3,
  image4,
  image6,
}) => {
  return (
    <Wrapper>
      <div className='small-container'>
        <div>
          <img onClick={handleIndex} src={image1} alt='' id='0' />
        </div>
        <div>
          <img onClick={handleIndex} src={image2} alt='' id='1' />
        </div>
        <div>
          <img onClick={handleIndex} src={image3} alt='' id='2' />
        </div>
        <div>
          <img onClick={handleIndex} src={image4} alt='' id='3' />
        </div>
        <div>
          <img onClick={handleIndex} src={image6} alt='' id='4' />
        </div>
      </div>
      <hr />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .btn {
    max-height: 300px;
    max-width: 300px;
    img {
      max-width: 100%;
      max-height: 300px;
    }
  }
  .small-container {
    margin-top: 1rem;

    :hover {
      cursor: pointer;
    }
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    div {
      max-width: 100px;
      max-height: 100px;
      overflow: hidden;
      border: 2px solid var(--primary-3);
      border-top-left-radius: var(--radius);
      border-top-right-radius: var(--radius);
      transition: var(--transition);
      :hover {
        cursor: pointer;
        transform: scale(1.2);
      }
      img {
        object-fit: cover;
        width: 100%;
        max-height: 100px;
        overflow: hidden;
      }
    }
  }
`

export default SinglePageHolder
