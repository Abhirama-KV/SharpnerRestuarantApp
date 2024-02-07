import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from '../src/store/CartProvider'

const App = () => {
  const [showCart,setShowCart] = useState(false);

  return (
    <CartProvider>
      {showCart && <Cart onClose={setShowCart}/>}
      <Header onShow={setShowCart}/>
      <main>
      <Meals />
      </main>
      
    </CartProvider>
  );
}

export default App;
