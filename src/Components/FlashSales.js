import React, { useRef } from 'react';
import storeItem from '../data/StoreItems.json';
import StoreItem from './StoreItem';

const Store = () => {
  const scrollContainerRef = useRef(null);
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200; 
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className='store'>
        <h1>
          <span></span>Today's
        </h1>
      </div>
   <div className='arrow 'style={{ display: 'flex', alignItems: 'center' ,justifyContent:" space-between"}}>
   <h2 className='h2'>Flash Sales</h2>
<div className='arr'>
<i className="fa-solid fa-arrow-left"
          onClick={() => scroll('left')}></i>
                <i className="fa-solid fa-arrow-right"
          onClick={() => scroll('right')}></i>
</div>
          

   </div>

          
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          ref={scrollContainerRef}
          style={{
            display: 'flex',
            overflowX: 'hidden',
            whiteSpace: 'nowrap',
            scrollBehavior: 'smooth',
          }}
        >
          {storeItem.map((item) => (
            <div key={item.id} style={{ flex: '0 0 auto', marginRight: '10px' }}>
              <StoreItem {...item} />
            </div>
          ))}
        </div>

      </div>
        <div className='view-all'><a href='#' >View All Products</a></div>
    </>
  );
};

export default Store;
