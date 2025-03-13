import React from 'react'
import Bg from '../Assets/Iphone 14 Pro PNG _ Download FREE - Freebiehive.png'

const Body = () => {
  return (
<div className='new-nav'>
  <div className='container'>
<div className='left'>
<nav>
<p className='collapse-p' style={{ position: "relative" }}>
  <a 
    data-bs-toggle="collapse" 
    href="#collapseExample1" 
    role="button" 
    aria-expanded="false" 
    aria-controls="collapseExample1"
  >
    Men's Fashion
    <i className="fa-solid fa-chevron-right"></i>
  </a>
  <div className="collapse" id="collapseExample1" style={{ position: "absolute", top: "100%", left: 0 }}>
    <ul>
      <li className="nav-item">
        <a className="nav-link" href="#">Item 1</a>
      </li>
    </ul>
  </div>
</p>



        <li className="nav-item">
          <a className="nav-link" href="#">Electronics</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Home & Lifestyle</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Medicine</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sports & Outdoor</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Baby’s & Toys</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Groceries & Pets</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Health & Beauty</a>
        </li>

</nav>
</div>

<div className='right'>
  <div className='text'>
    <h3 ><i className="fa-brands fa-apple"></i>iPhone 14 Series</h3>
    <h1>Up to 10% <br/>off Voucher</h1>
    <a href='#' style={{    textUnderlineOffset: "7px"}}>Shop Now   <i className="fa-solid fa-chevron-right"></i>
</a>

  </div>
  <div className='image'>
    <img src={Bg}></img>
  </div>
</div>


</div>
</div>
  )
}

export default Body
