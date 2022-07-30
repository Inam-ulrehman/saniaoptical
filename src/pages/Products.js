import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Filter from '../components/Filter'
import ProductsHolder from '../components/ProductsHolder'
import { handleGridView } from '../features/products/products'

const Products = () => {
  const dispatch = useDispatch()
  const { copyProducts, isLoading, gridView } = useSelector(
    (state) => state.products
  )
  const handleView = () => {
    dispatch(handleGridView())
  }
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
      <button className='btn' type='button' onClick={handleView}>
        {gridView ? 'ListView' : 'Grid View'}
      </button>

      {gridView ? null : (
        <div className='products-container'>
          {copyProducts.map((item) => {
            return (
              <ProductsHolder gridView={gridView} key={item._id} {...item} />
            )
          })}
        </div>
      )}
      <div className='products-container-grid'>
        {copyProducts.map((item) => {
          return <ProductsHolder gridView={gridView} key={item._id} {...item} />
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  @media (min-width: 600px) {
    .products-container {
      display: grid;
    }
  }

  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .products-container {
    }
  }
  @media (min-width: 1200px) {
  }
  /* ===Grid-View==== */
  .products-container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 600px) {
    .products-container-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .products-container-grid {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  @media (min-width: 1200px) {
  }
`
export default Products
