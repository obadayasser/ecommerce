import React from 'react';
import storyItem from '../data/StoryItem.json';
import Story from './NumItem';

const Num = () => {

  return (
    <>

          
      <div className='container' style={{ display: 'flex', alignItems: 'center' }}>
        <div

          style={{
            display: 'flex',
            overflowX: 'hidden',
            whiteSpace: 'nowrap',
            scrollBehavior: 'smooth',
            
          }}
        >
          {storyItem.map((item) => (
            <div key={item.id} style={{ flex: '0 0 auto', justifyContent:"center", alignItems:"center", marginRight: '10px' }}>
              <Story {...item} />
            </div>
          ))}
        </div>

      </div>

    </>
  );
};

export default Num;
