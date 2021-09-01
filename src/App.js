import React, {useState } from 'react';

import './App.css';
import Cart from './components/cart/Cart';
import Shop from './components/core/Shop';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import CartProvider from './components/store/CartProvider';

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
      <main className="back">
        <Shop />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;