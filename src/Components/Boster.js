import React from 'react'
import BOS from '../Assets/JBL_BOOMBOX_2_HERO_020_x1  1.png'
import gg from '../Assets/Ellipse 23 (1).png'
const Boster = () => {
  return (
   <div className='container' style={{paddingTop:"75px"}}>
    <div className='boster'>
   <div className='left'>
        <h5>Categories</h5>
        <h1>Enhance Your Music Experience</h1>
        <a href='#'>Buy Now!</a>
      </div>
      <div className='right'>
        <img className='imgg' src={BOS}></img>
        <img className='imgi' src={gg}></img>
      </div>
   </div>
    </div>
  )
}

export default Boster
