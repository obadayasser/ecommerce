import React from 'react';

const CategoriesItem = ({ id, name, imgUrl }) => {
  return (
    <div className="categories-item">
      <div className={`container ${name === "Camera" ? "highlight" : ""}`}>
        <div className="card-categories">
          <img src={imgUrl} className="card-img-top" alt={name} />
          <h5>{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default CategoriesItem;

