import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css"
import './App.css';

import { toast, ToastContainer } from "react-toastify"
import {Container, Row, Col} from "reactstrap"

import BuyPage from './Components/BuyPage';
import Cart from './Components/Cart';

const App = () => {

  const [cartItem, setCartItem] = useState([]);


  const addInCart = (item) => {
    // findIndex Returns the index of the first element in the array where predicate is true, and -1 otherwise
    const isAlreadyAdded = cartItem.findIndex((arr) => {
      return arr.id === item.id;
    })

    // If item is already present in cart 
    if (isAlreadyAdded !== -1) {
      toast("already added in cart", {
        type: "error"
      })
    }
    else {                               // If item is not present in cart
      setCartItem([...cartItem, item]);
    }
  }

  const buyNow = () => {
    // After clicking buy now, All cart items should be empty
    setCartItem([])

    toast("Purchase Completed", {
      type: "success"
    })
  }

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => (singleItem.id !== item.id)))
  }

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
         <Col md="8">   {/*8 grids are given to items */}
          <BuyPage addInCart={addInCart} />
        </Col>

        <Col md="4">    {/* remaining 4 grids are given to cart */}
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
