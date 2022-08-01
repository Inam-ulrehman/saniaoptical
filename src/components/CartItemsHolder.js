import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GrFormClose } from 'react-icons/gr'
import styled from 'styled-components'

const CartItemsHolder = ({ name, price, image }) => {
  const { totalItems } = useSelector((state) => {
    return state.cart
  })
  return (
    <Wrapper className='container'>
      <div className='item-holder'>
        <div className='single-item'>
          <div className='headline'>
            <h5 className='single-item-heading'>MY BAG</h5>
            <button type='button'>
              <GrFormClose />
            </button>
          </div>
          <div className='image-description'>
            <div className='image-box'>
              <img src={image} alt='' />
            </div>
            <div className='information-box'>
              <div>
                <p>$ {(price / 100) * 2}</p>
                <p>{name}</p>
                <p>Total Quantity : 1 </p>
              </div>
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
        <p className='title'>Total Items : $ {totalItems}</p>
        <Link className='btn' to='/products'>
          More products
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .headline {
    display: flex;
    justify-content: space-between;
    svg {
      font-size: 2rem;
      transition: var(--transition);
      :hover {
        font-size: 2.2rem;
      }
    }
    button {
      background: transparent;
      border: transparent;
      :hover {
        cursor: pointer;
      }
    }
  }
  @media (max-width: 600px) {
    .headline {
      h5 {
        margin: 0;
      }

      svg {
        font-size: 1rem;

        :hover {
          font-size: 1.2rem;
        }
      }
    }
  }
`
export default CartItemsHolder
