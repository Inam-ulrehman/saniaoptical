import React from 'react'
import styled from 'styled-components'
import categoryImage from '../images/category.jpg'

const CategoryHolder = ({ item }) => {
  return (
    <Wrapper>
      <div>
        <div className='img-holder'>
          <img src={categoryImage} alt='' />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .img-holder {
    max-width: 300px;
    max-height: 300px;
    img {
      max-width: 300px;
    }
  }
`
export default CategoryHolder

// <div onClick={handleValue}>{item}</div>
