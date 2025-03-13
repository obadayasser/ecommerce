import React from 'react'
import Alya from '../Assets/Story.png'
import Header from '../Components/Header'
import Num from './Num'
import Footer from '../Components/Footer'
const Story = () => {
  return (
<>
<Header/>
<div className='story'>
   <div className='lins'>
   <a href='/'><li>Home</li></a> / <a href='/profile'><li>About</li></a>
   </div>
      <div className='details'>
    <div className='left'>
    <h1>Our Story</h1>
    <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, 
        Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>

    <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
    </div>
    <div className='right'>
    <img src={Alya}></img>
    </div>
      </div>
    </div>

    <Num/>
    <Footer/>
    </>
    
)
}

export default Story
