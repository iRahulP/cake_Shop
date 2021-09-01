import React, {useState } from 'react';
import './App.css';
import Shop from './components/core/Shop';
import Footer from './components/Footer';
import Header from './components/Header';
import CartProvider from './components/ux/CartProvider';

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
      <Header onShowCart={showCartHandler}/>
      <main>
        <Shop />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;