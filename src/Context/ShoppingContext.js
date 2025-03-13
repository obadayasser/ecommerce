import { createContext, useContext, useEffect, useState } from "react";
import ShoppingCartContext from "../Components/ShoppingCartContext";
import { onAuthStateChanged } from "firebase/auth/web-extension";
import { auth } from "../FireBase/FireBase";

const ShoppingContext = createContext({})
const itailCart = localStorage.getItem("shopping-cart") ? JSON.parse(localStorage.getItem("shopping-cart")) : []
const ShoppinProvider = ({ children }) => {

    const [open,setOpen] = useState(false)
    const [cartItem, setCartItem] = useState(itailCart)
    const [currentUser, setCurrentUser]= useState(null)
    const [userLog, setUserLog]= useState(false)

    useEffect(()=> {
        const unsubscibe = onAuthStateChanged(auth, initializeUser)
        return unsubscibe;
        async function initializeUser(user) {
            if (user) {
                setCurrentUser({...user})
                setUserLog(true)
            }
            else{
                setCurrentUser(null)
                setUserLog(false)

            }
        }
    },[])




    useEffect(()=>{
        localStorage.setItem("shopping-cart", JSON.stringify(cartItem))
    },[cartItem])
    const openCart = ()=>{
        setOpen(true)
    }
    const closeCart = ()=>{
        setOpen(false)
    }
    const getItemQuant = (id) => {
        return cartItem.find((item) => item.id === id)?.quant || 0;
    }
    const cartNum = cartItem.reduce((quant,item)=>(
        item.quant + quant 
    ),0)
    const icreaseQuantItem = (id) => {
        setCartItem((currItem) => {
            if (currItem.find((item) => item.id === id) == null) {
                return [...currItem, { id, quant: 1 }]
            } else {
                return currItem.map((item) => {
                    if (item.id === id) {
                        return { ...item, quant: item.quant + 1 }
                    } else {
                        return item;
                    }
                })
            }
        })

    }
    const decreaseQuantItem = (id) => {
        setCartItem((currItem) => {
            if (currItem.find((item) => item.id === id) == null) {
                return currItem.filter((item) => item.id == !id)
            } else {
                return currItem.map((item) => {
                    if (item.id === id) {
                        return { ...item, quant: item.quant - 1 }
                    } else {
                        return item;
                    }
                })
            }
        })

    }
    const removeItem = (id) => {
        setCartItem((currItem) => currItem.filter((item) => item.id !== id))
    }
    return (
        <ShoppingContext.Provider value={{ userLog,currentUser,cartItem, getItemQuant, icreaseQuantItem, decreaseQuantItem, removeItem,openCart, closeCart, cartNum}}>
            {children}
            <ShoppingCartContext open={open}/> 
        </ShoppingContext.Provider>
    )
}

export default ShoppinProvider;

export const useShopingCart = () => {
    return useContext(ShoppingContext)
}
