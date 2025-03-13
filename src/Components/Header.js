import React, { useState, useEffect } from 'react';
import { useShopingCart } from '../Context/ShoppingContext';
import { Link } from 'react-router-dom';
import { auth } from '../FireBase/FireBase'; 
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Header = () => {
  const { openCart, cartNum,setCartItem  } = useShopingCart();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      localStorage.removeItem('shopping-cart');
      setCartItem([]); 
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="header">
      <div className="top">
        <h1>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a href="#">ShopNow!</a>
        </h1>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            E-Commerce
          </a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars-staggered"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/story">
                  About
                </a>
              </li>
              {!currentUser ? (
                <li className="nav-item">
                  <a className="nav-link" href="/sign">
                    Sign Up
                  </a>
                </li>
              ) : null}
            </ul>
            <form className="d-flex" role="search">
              <div className="search-btn">
                <input
                  type="search"
                  placeholder="What are you looking for?"
                  aria-label="Search"
                />
                <a href="#">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
              </div>
              <a className="shoping" href="#">
                <i className="fa-regular fa-heart">
                  <h3>3</h3>
                </i>
              </a>
              <a className="shoping" href="#">
                <a style={{ border: '0' }} onClick={openCart}>
                  <i className="fa-solid fa-cart-shopping">
                    <h3>{cartNum}</h3>
                  </i>
                </a>
              </a>

              <div className="profile-class">
                <div className="btn-group">
                  <a
                    className="dropdown"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                    aria-expanded="false"
                  >
                    <a className="profile-icon" href="#">
                      <i className="fa-regular fa-user"></i>
                    </a>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-end">
                    {currentUser ? (
                      <>
                        <li>
                          <span className="dropdown-item" style={{color:"#fff"}}>
                            <i className="fa-regular fa-user"></i>
                            Welcome, {currentUser.displayName || currentUser.email.split('@')[0]}
                          </span>
                        </li>
                        <li>
                          <button style={{color:"#fff"}}
                            className="dropdown-item"
                            onClick={handleLogout}
                          >
                            <i className="fa-solid fa-arrow-right-from-bracket"></i> Log Out
                          </button>
                        </li>
                      </>
                    ) : (
                      <li>
                        <a className="dropdown-item" href="/sign">
                          <i className="fa-solid fa-user-plus"></i> Sign Up
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
      <span>
        <hr />
      </span>
    </div>
  );
};

export default Header;
















































/* import React from 'react'
import { useShopingCart } from '../Context/ShoppingContext'
import { Link } from 'react-router-dom'
const Header = () => {
  const {openCart , cartNum} = useShopingCart()
  return (
    <div className='header'>
      <div className='top '>
        <h1>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!      <a href="#">ShopNow!</a></h1>
  
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">E-Commerce</a>
    <button className="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa-solid fa-bars-staggered"></i>
        </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="\story">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={"\sign"}>Sign Up</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <div className='search-btn'>
        <input  type="search" placeholder="What are you looking for?" aria-label="Search" />
        <a href= "#"><i className="fa-solid fa-magnifying-glass"></i></a>
        </div>
        <a className="shoping" href="#">
        <i className="fa-regular fa-heart">
            <h3>3</h3>
  </i>
</a>
        <a className="shoping" href="#">
  <button style={{border : "0"}} onClick={openCart}>
  <i className="fa-solid fa-cart-shopping">
    <h3>{cartNum}</h3>
  </i>
  </button>
</a>


<div className='profile-class'>
<div className="btn-group" >
  <a  className=" dropdown" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
  <a className="profile-icon" href="#">
        <i className="fa-regular fa-user"></i>
  </a>
       
  </a>
  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-end">
    <li><a href='#'><i class="fa-regular fa-user"></i>Your Account</a></li>
    <li><a href='#'><i class="fa-solid fa-arrow-right-from-bracket"></i>Log Out</a></li>

  </ul>
</div>
</div>
       
       

      </form>
    </div>
  </div>
</nav>
<span><hr/></span>

    </div>
  )
}

export default Header
 */