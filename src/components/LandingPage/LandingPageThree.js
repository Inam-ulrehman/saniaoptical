import React from 'react'
import styled from 'styled-components'

const LandingPageThree = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='slider'>
          <div className='item'>1</div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .container {
    max-width: 90vw;
    margin: 0 auto;
    overflow-x: scroll;
    margin: 10px;
  }
  .slider {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    max-width: 80%;
    margin: 0 auto;
  }

  .item {
    flex: 0 0 auto;
    width: 100px;
    height: 100px;
    background: #f00;
    margin: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`
export default LandingPageThree
