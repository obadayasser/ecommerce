import React, { useEffect, useState } from 'react';
import bestSellingItem from '../data/BestSellingItem.json';
import BestSellingItem from './BestSellingItem';

const BestSelling = ({ items = bestSellingItem }) => {
  const [visibleItems, setVisibleItems] = useState(items);
  const [marginRight, setMarginRight] = useState('10px');
  useEffect(()=>{
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleItems(window.innerWidth <= 768 ? items.slice(0, 2) : items);
        setMarginRight('60px');

      } else {
        setVisibleItems(items);
        setMarginRight('10px');

      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[items])



  return (
    <>
      <div className='store'>
   <div className='container'>
   <h1>
          <span></span>This Month
        </h1>
   </div>
      </div>
   <div className='container' style={{display:"flex", justifyContent:"space-between"}}>
   <h2 className='h2'>Best Selling Products</h2>

   <div className='view-all2' ><a href='#' >View All </a></div>


   </div>

          
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className='container'
          style={{
            display: 'flex',
            overflowX: 'hidden',
            whiteSpace: 'nowrap',
            scrollBehavior: 'smooth',
          }}
        >
          {visibleItems.map((item) => (
            <div key={item.id} style={{ flex: '0 0 auto', marginRight}}>
              <BestSellingItem {...item} />
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default BestSelling;
