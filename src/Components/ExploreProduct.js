import React, { useState, useEffect } from 'react';
import exploreProduct from '../data/ExploreProductItem.json';
import ExploreProductItems from './ExploreProductItem';

const ExploreProduct = () => {
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setColumns(2); 
      } else {
        setColumns(4); 
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className='container'>
        <div className='store'>
          <h1>
            <span></span>Our Products
          </h1>
          <h2 className='h2'>Explore Our Products</h2>
        </div>
      </div>

      <div
        className="container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          padding: '10px',
        }}
      >
        {exploreProduct.map((item) => (
          <div
            key={item.id}
            style={{
              flex: `1 1 calc(${100 / columns}% - 20px)`,
              boxSizing: 'border-box',
            }}
          >
            <ExploreProductItems {...item} />
          </div>
        ))}
      </div>

      <div className='view-all'>
        <a href='#'>View All Products</a>
      </div>
    </>
  );
};

export default ExploreProduct;
