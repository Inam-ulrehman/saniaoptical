import React from 'react'

const CartItemsHolder = () => {
  return (
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
        <p className='title'>Total Items : 4</p>
      </div>
    </div>
  )
}

export default CartItemsHolder
