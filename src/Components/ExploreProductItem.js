import React from 'react';
import { useShopingCart } from '../Context/ShoppingContext';
import { toast } from 'react-toastify'

const ExploreProduct = ({ id, name, price, imgUrl, sel, like ,state}) => {


  const {getItemQuant ,icreaseQuantItem, decreaseQuantItem, removeItem,userLog} = useShopingCart();
  const quant = getItemQuant(id);
  
    const handleAddToCart = () => {
      
      if (!userLog) {
      toast.error("Please log in to add items to your cart",{
        position:"bottom-center"
    })
      
  
      } else {
        icreaseQuantItem(id); 
      }
    };
  return (

    <div className="explore-item" >

        <div className="card" >
        <div className='top'>
            {state  && (
  <div className="dis">
    <h3>{state}</h3>
  </div>
)}

<div className='icn'>
<i onClick={handleAddToCart} style={{cursor:"pointer"}} className={sel}></i>
<i className={like}></i>
</div>
        </div>

        <img src={imgUrl}  className="card-img-top" />
        <div className="card-body">
          {quant === 0 ? (   <button className='add' onClick={handleAddToCart}>Add To Cart</button>) : (
            <div>   
              <div>
              <button className='plus' onClick={()=>{decreaseQuantItem(id)}}>-</button>
              <span className='cart'>{quant} in cart</span>
              <button className='plus' onClick={()=>{icreaseQuantItem(id)}}>+</button>
              </div>
              <button className='remove' onClick={()=>{removeItem(id)}}>Remove</button>
            </div>
          )}
          
   <div className='aprov'>
   <h5 className="card-title">{name}</h5>
          <p className="card-text"> ${price}

            </p>
   </div>
          
        </div>
      </div>
    </div>
  );
};

export default ExploreProduct;
