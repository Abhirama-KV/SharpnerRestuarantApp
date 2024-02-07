import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

const App = () => {
  const [showCart,setShowCart] = useState(false);

  return (
    <Fragment>
      {showCart && <Cart onClose={setShowCart}/>}
      <Header onShow={setShowCart}/>
      <main>
      <Meals />
      </main>
      
    </Fragment>
  );
}

export default App;
