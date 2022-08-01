import React from 'react'
import styled from 'styled-components'

const Cart = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='item-holder'>
          <div className='single-item'>
            <h5 className='single-item-heading'>MY BAG</h5>
            <div className='image-description'>
              <div className='image-box'>Image</div>
              <div className='information-box'>
                <div>
                  <p>$ 18.00</p>
                  <p>information about item</p>
                  <p>total quantity:1</p>
                </div>

                <p>x</p>
              </div>
              <p className='item-total'>Sub-Total </p>
              <p className='item-total'> $ 18.00</p>
            </div>
          </div>
        </div>
        {/* Cart holder Total start herer */}
        <div className='cart-holder'>
          <h5 className='cart-holder-total'>TOTAL</h5>
          <div>
            <h5>Sub-total Delivery</h5>
            <h5>$ 18.00</h5>
          </div>
          <p className='cart-holder-delivery'>Standard Delivery {`($2.86)`}</p>
          <button className='btn btn-block' type='button'>
            CHECKOUT
          </button>
        </div>
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
    /* ===Cart Item Holder=== */
    .single-item-heading {
      border-bottom: 1px solid var(--grey-3);
    }
    .image-description {
      display: grid;
      grid-template-columns: 1fr 3fr;
      gap: 1rem;
    }
    .image-box {
      height: 100px;
      width: 100%;
      background-color: var(--grey-2);
      padding: 1rem;
      margin-left: 1rem;
    }
    .information-box {
      display: grid;
      grid-template-columns: 4fr 1fr;
      div {
        padding: 10px;
        padding-top: 0;
        h5 {
          margin: 0;
        }
        p {
          font-size: var(--extra-small-text);
          margin: 0;
        }
      }
    }
    .item-total {
      margin: 0px;
      font-size: var(--extra-small-text);
      display: flex;
      justify-content: space-around;
    }
    /* ===TOTAL BILL HOLDER==== */
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

      div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        h5 {
          font-size: var(--extra-small-text);
          margin: 0px;
          padding: 8px;
          color: var(--grey-10);
        }
      }
    }
    .cart-holder-total {
      border-bottom: 1px solid var(--grey-2);
      margin-bottom: 5px;
    }
    .cart-holder-delivery {
      font-size: var(--extra-small-text);
      border-bottom: 2px solid var(--grey-3);
      margin: 4px 13px;
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
