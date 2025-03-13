import React, { useRef } from 'react';
import categoriesItem from '../data/CategoriesItem.json';
import CategoriesItem from './CategoriesItem';

const Categories = () => {
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
          <span></span>Categories
        </h1>
      </div>
   <div className='arrow 'style={{ display: 'flex', alignItems: 'center' ,justifyContent:" space-between"}}>
   <h2 className='h2'>Browse By Category</h2>
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
          {categoriesItem.map((item) => (
            <div key={item.id} style={{ flex: '0 0 auto', justifyContent:"center", alignItems:"center", marginRight: '10px' }}>
              <CategoriesItem {...item} />
            </div>
          ))}
        </div>

      </div>

    </>
  );
};

export default Categories;
