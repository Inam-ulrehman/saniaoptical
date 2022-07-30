import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProductsHolder = ({
  boolean,
  currency,
  image1,

  _id: productId,
}) => {
  return (
    <Wrapper>
      <Link to={`/products/:${productId}`} className='article-containers'>
        <div className='image-holder'>
          <img src={image1} alt='' />
        </div>
        <div className='body-holder'>
          <p className={boolean ? '' : 'collection-p'}>
            {!boolean ? 'New Collection' : 'Classic'}
          </p>
          <p>CAD $ {currency}</p>
        </div>
        <div className='btn-box'>
          <button className='btn'>more info</button>
          <button className='btn'>add to cart</button>
        </div>
      </Link>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .article-containers {
    display: grid;

    max-width: 250px;
    margin: 0 auto;
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    :hover {
      box-shadow: var(--shadow-4);
    }
    margin-bottom: 1rem;
  }
  .image-holder {
    max-width: 250px;
    max-height: 250px;
    overflow: hidden;
    border: 2px solid var(--primary-3);
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    img {
      object-fit: cover;
      width: 100%;
      max-height: 300px;
      overflow: hidden;
    }
  }
  .body-holder {
    display: flex;
    justify-content: space-between;

    p {
      margin: 5px 0;
      padding: 0 5px;
      color: var(--grey-8);
    }
  }
  .collection-p {
    background: var(--primary-1);
  }
  .btn-box {
    display: flex;
    justify-content: space-between;
  }
`
export default ProductsHolder
