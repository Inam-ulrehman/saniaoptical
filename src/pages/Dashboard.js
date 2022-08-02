import React from 'react'
import styled from 'styled-components'
import TotalCartComponent from '../components/navbar/TotalCartComponent'
import { useSelector } from 'react-redux'
import CheckOutPayment from '../components/CheckOutPayment'

const Dashboard = () => {
  const { cart } = useSelector((state) => state.cart)

  const newTotal = cart.reduce((total, cart) => {
    total += cart.price
    return total
  }, 0)

  return (
    <Wrapper>
      {cart.length > 0 ? (
        <div>
          <CheckOutPayment />
          <TotalCartComponent newTotal={newTotal} />
        </div>
      ) : (
        <div>There is nothing to pay</div>
      )}
    </Wrapper>
  )
}
const Wrapper = styled.div`
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
`
export default Dashboard
