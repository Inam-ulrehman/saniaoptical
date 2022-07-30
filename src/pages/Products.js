import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Filter from '../components/Filter'
import ProductsHolder from '../components/ProductsHolder'

const Products = () => {
  const { copyProducts, isLoading } = useSelector((state) => state.products)
  console.log(isLoading)
  console.log(copyProducts)
  if (isLoading) {
    return (
      <div>
        <h1>Loading....</h1>
        <div className='loading'></div>{' '}
      </div>
    )
  }
  return (
    <Wrapper>
      <Filter />
      <hr />
      <div className='products-container'>
        {copyProducts.map((item) => {
          return <ProductsHolder key={item._id} {...item} />
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  @media (min-width: 600px) {
    .products-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media (min-width: 1200px) {
  } ;
`
export default Products
