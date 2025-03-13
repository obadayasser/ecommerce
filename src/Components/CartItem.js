import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import storeItem from '../data/StoreItems.json'
import { useShopingCart } from '../Context/ShoppingContext'

const CartItem = ({id, quant}) => {
    const item = storeItem.find((i)=> i.id === id)
    const {removeItem} = useShopingCart()
    if(item == null)return null;

    return (
<>
<Stack
          direction="horizontal"
          gap={2}
          className="d-flex align-items-center"
        >
          <img
            src={item.imgUrl}
            alt={item.name}
            style={{ width: "125px", height: "75px", objectFit: "cover" }}
          />
          <div className="me-auto">
            <div>
              {item.name}{" "}
              {quant > 1 && (
                <span className="text-muted" style={{ fontSize: ".65rem" }}>
                  x{quant}
                </span>
              )}
            </div>
            <div className="text-muted" style={{ fontSize: ".75rem" }}>
              {item.price}$
            </div>
          </div>
          <div>{(item.price * quant).toFixed(2)}$</div>
      
          <Button 
            variant="outline-danger"
            size="sm"
            onClick={() => removeItem(id)}
          >
            &times;
          </Button>
        </Stack>
</>
      );
      
}

export default CartItem
