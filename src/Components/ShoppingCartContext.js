import React from 'react'
import { Button, Offcanvas, Stack } from 'react-bootstrap'
import { useShopingCart } from '../Context/ShoppingContext'
import CartItem from './CartItem'
import storeItem from '../data/StoreItems.json'



const ShoppingCartContext = ({open}) => {
const {cartItem , closeCart} = useShopingCart()

  return <Offcanvas show={open} onHide={closeCart} placement='end'>
    <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
<Stack gap={3}>
{cartItem.map((item)=>(
        <CartItem key={item.id} {...item}/>
    ))}
   <div className="text-end fw-bold">
  Total: $
   {cartItem.reduce((total, cartItem)=> {
     const item = storeItem.find((i)=>i.id === cartItem.id )
     return total + (item?.price || 0 ) * cartItem.quant;
    },0).toFixed(2)}
   </div>
   {cartItem.length > 0 && (
            <>
              <div className="text-end fw-bold"></div>
              <Button variant="success">Complete your purchase</Button>
            </>
          )}
          </Stack>
    </Offcanvas.Body>
  </Offcanvas>
}

export default ShoppingCartContext
