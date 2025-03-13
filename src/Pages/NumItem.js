import React from 'react';

const NumItem = ({ id, name,name2, imgUrl }) => {
  return (
    <div className="categories-item">
      <div className={`container ${name === "Mopnthly Produduct Sale" ? "highlight" : ""}`}>
        <div className="card-categories">
          <img  src={imgUrl} className="card-img-top"  />
          <h5 style={{color:"black"}}>{name2}</h5>
          <h5>{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default NumItem;