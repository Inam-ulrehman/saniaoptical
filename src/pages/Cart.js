import React from 'react'
import styled from 'styled-components'

const Cart = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='item-holder'>
          <div className='single-item'>Item-1</div>
        </div>
        <div className='cart-holder'>cart holder</div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 200vh;
  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    .single-item {
      background: var(--white);
      height: 200px;
      margin-top: 4.3rem;
      box-shadow: var(--shadow-1);
      transition: var(--transition);
      :hover {
        box-shadow: var(--shadow-3);
      }
    }
    gap: 5px;
    .cart-holder {
      position: fixed;
      width: 150px;
      height: 200px;
      background: var(--white);
      box-shadow: var(--shadow-1);
      right: 10px;
      top: 100px;
      transition: var(--transition);
      :hover {
        box-shadow: var(--shadow-3);
      }
    }
    @media (min-width: 768px) {
      .cart-holder {
        width: 250px;
      }
    }
    @media (max-width: 450px) {
      .single-item {
        width: 200px;
      }
    }
    @media (min-width: 768px) {
      .single-item {
        margin-top: 0.6rem;
      }
    }
  }
`
export default Cart
