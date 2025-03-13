import React from 'react';
import { useShopingCart } from '../Context/ShoppingContext';
import { toast } from 'react-toastify';

const BestSellingItem = ({ id, name, price, imgUrl, sel, like, price2 }) => {
  const { getItemQuant, icreaseQuantItem, decreaseQuantItem, removeItem, userLog } = useShopingCart();
  const quant = getItemQuant(id);

  const handleAddToCart = () => {
    if (!userLog) {
      toast.error("Please log in to add items to your cart", { position: "bottom-center" });
    } else {
      icreaseQuantItem(id);
    }
  };

  return (
    <div className="store-item">
      <div className="card">
        <div className='top'>
          <div className='icn' style={{ marginLeft: "70px", textAlign: "end" }}>
            <i onClick={handleAddToCart} style={{cursor:"pointer"}}  className={sel}></i>
            <i className={like}></i>
          </div>
        </div>
        <img src={imgUrl} className="card-img-top" alt={name} />
        <div className="card-body">
          {quant === 0 ? (
            <button className='add' onClick={handleAddToCart}>Add To Cart</button>
          ) : (
            <div>
              <div>
                <button className='plus' onClick={() => decreaseQuantItem(id)}>-</button>
                <span className='cart'>{quant} in cart</span>
                <button className='plus' onClick={() => icreaseQuantItem(id)}>+</button>
              </div>
              <button className='remove' onClick={() => removeItem(id)}>Remove</button>
            </div>
          )}
          <div className='aprov'>
            <h5 className="card-title">{name}</h5>
            <p className="card-text"> ${price}<del className="card-text2"> ${price2}</del></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingItem;
