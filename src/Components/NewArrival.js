import React from 'react';
import play from '../Assets/ps5-slim-goedkope-playstation_large 1.png'
import wom from '../Assets/attractive-woman-wearing-hat-posing-black-background 1.png'
import speak from '../Assets/652e82cd70aa6522dd785109a455904c (2).png'
import pref from '../Assets/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png'
import delv from '../Assets/icon-delivery.png'
import cust from '../Assets/Icon-Customer service.png'
import sevt from '../Assets/Icon-secure.png'
const NewArrival = () => {

  return (
    <>
      <div className='container'>
      <div className='store'>
        <h1>
          <span></span>Featured
        </h1>
        <h2 className='h2'>New Arrival</h2>

      </div>
     </div>
    <div className='new-arrival'>
    <div className='container'>
    <div className='left'>
        <div className='text'> 
                <h1>PlayStation 5</h1>
                <p>Black and White version of the PS5 coming out on sale.</p>
                <a href='#'>Shop Now</a>
            </div>
        <img src={play}></img>
    </div>
    <div className='right'>
        <div className='woman'>
            <div className='text'> 
                <h1>Women’s Collections</h1>
                <p>Featured woman collections that give you another vibe.</p>
                <a href='#'>Shop Now</a>
            </div>
            <img src={wom}></img>
            </div>
        <div className='level'>
<div className='speaker'>
<div className='text'> 
<h1>Speakers</h1>
                <p>Amazon wireless speakers.</p>
                <a href='#'>Shop Now</a>
            </div>
<img src={pref}></img>

</div>
<div className='speaker'>
<div className='text'> 
                <h1>Perfume</h1>
                <p>GUCCI INTENSE OUD EDP.</p>
                <a href='#'>Shop Now</a>
            </div>
<img src={speak}></img>

    </div>
            </div>
    </div>
    </div>
    </div>
<div className="final-icon">
    <div className='delv'>
      <div className='image'><img src={delv}></img></div>
      <h4>FREE AND FAST DELIVERY</h4>
      <p>Free delivery for all orders over $140</p>
    </div>
    <div className='delv'>
      <div className='image'><img src={cust}></img></div>
      <h4>24/7 CUSTOMER SERVICE</h4>
      <p>Friendly 24/7 customer support</p>
    </div>
    <div className='delv'>
      <div className='image'><img src={sevt}></img></div>
      <h4>MONEY BACK GUARANTEE</h4>
      <p>We reurn money within 30 days</p>
    </div>
</div>
    </>
  );
};

export default NewArrival;
