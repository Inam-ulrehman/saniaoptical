import { React, useState, useEffect } from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import SinglePageHolder from '../components/SinglePageHolder'

const SingleProduct = () => {
  const [value, setValue] = useState(false)
  const { products, isLoading } = useSelector((state) => state.products)
  const [index, setIndex] = useState([0])

  const params = useParams()
  const { Id } = params

  // I'm using this to fix Refresh problem in useParams
  const fixRefresh = () => {
    setValue(true)
  }
  useEffect(() => {
    fixRefresh()
  }, [])
  if (isLoading || !value) {
    return (
      <div>
        <h3 className='title'>Loading...</h3>
      </div>
    )
  } else {
    let tempProduct = products.find((item) => item._id === Id)

    const { description, image1, image2, image4, image6, image3 } = tempProduct
    const Images = [image1, image2, image3, image4, image6]
    const handleIndex = (e) => {
      const clickIndex = e.target.id
      setIndex(clickIndex)
    }

    return (
      <>
        <Wrapper>
          <h1>hello</h1>
          <h5>{description}</h5>
          <div className='container'>
            <div className='image-description'>
              <div className='image-container'>
                <img src={Images[index]} alt='' />
              </div>
              <div className='description'>
                <p className='title' style={{ margin: '0' }}>
                  {tempProduct.product}
                </p>

                <p className='title'>
                  Arrival date -{' '}
                  {moment(tempProduct.createdAt).format('MMM Do YY')}
                </p>
                <div className='price-holder'>
                  <p>Total items : 7</p>
                  <p>CAD $ : {tempProduct.currency}</p>
                </div>
                <div className='button-holder'>
                  <Link className='btn' to='/products'>
                    back to Products
                  </Link>
                  <button type='button' className='btn'>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* //Small images box */}

          <SinglePageHolder
            handleIndex={handleIndex}
            image1={image1}
            image2={image2}
            image3={image3}
            image4={image4}
            image6={image6}
          />
        </Wrapper>
      </>
    )
  }
}

const Wrapper = styled.section`
  .image-description {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .image-container {
      max-width: 300px;
      max-height: 300px;
      margin: 0 auto;
      overflow: hidden;

      img {
        width: 250px;
        height: 200px;
        max-width: 100%;
        display: block;
        object-fit: cover;
      }
    }
  }

  .description {
    border: 2px double var(--primary-1);
    box-shadow: var(--shadow-1);
    @media (max-width: 400px) {
      font-size: var(--small-text);
      p {
        margin: 0px;
      }
    }
    @media (max-width: 500px) {
      font-size: var(--small-text);
      p {
      }
    }
  }
  .button-holder {
    button {
      padding: 10px;
    }
  }

  .button-holder {
    display: flex;
    justify-content: space-between;
  }
`
export default SingleProduct
