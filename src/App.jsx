import React, { useState } from 'react';
import Shop from './components/core/Shop';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import CartProvider from './components/store/CartProvider';
import Cart from './components/cart/Cart';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyCZV1oVrlKAlP4Nl8CPZoVWBrBzKTkbpFc",
  authDomain: "cakeshop-a4bb8.firebaseapp.com",
  projectId: "cakeshop-a4bb8",
  storageBucket: "cakeshop-a4bb8.appspot.com",
  messagingSenderId: "708661417529",
  appId: "1:708661417529:web:80e36e9c2011b49cf1dfe8"
})

export const db = getFirestore(app);

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
        <Shop />
      <Footer />
    </CartProvider>
  );
}

export default App;