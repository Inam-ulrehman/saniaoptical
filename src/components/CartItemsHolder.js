import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { GrFormClose } from 'react-icons/gr'
import styled from 'styled-components'
import { removeCartItem } from '../features/cart/cartSlice'
import { useEffect } from 'react'
import { formatPrice } from '../utils/helper'

const CartItemsHolder = ({ name, price, image, _id }) => {
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const { totalItems } = useSelector((state) => {
    return state.cart
  })

  // handle Remove
  const handleRemove = () => {
    dispatch(removeCartItem(_id))
  }
  // Total value
  const calculateTotal = () => {}
  const newTotal = cart.reduce((total, cart) => {
    total += cart.price
    return total
  }, 0)
  console.log(newTotal)
  useEffect(() => {
    calculateTotal()
  }, [])
  return (
    <Wrapper className='container'>
      <div className='item-holder'>
        <div className='single-item'>
          <div className='headline'>
            <h5 className='single-item-heading'>MY BAG</h5>
            <button onClick={handleRemove} type='button'>
              <GrFormClose />
            </button>
          </div>
          <div className='image-description'>
            <div className='image-box'>
              <img src={image} alt='' />
            </div>
            <div className='information-box'>
              <div>
                <p>{formatPrice(price)}</p>
                <p>{name}</p>
                <p>Quantity : 1 </p>
              </div>
            </div>
            <p className='item-total'>Sub-Total </p>
            <p className='item-total'> {formatPrice(newTotal)}</p>
          </div>
        </div>
      </div>
      {/* Cart holder Total start herer */}
      <div className='cart-holder'>
        <h5 className='cart-holder-total'>TOTAL</h5>
        <div>
          <h5>Sub-total </h5>
          <h5>{formatPrice(newTotal)}</h5>
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
