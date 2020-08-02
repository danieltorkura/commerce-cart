import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import {createStore} from 'redux'
import reducer from './reducer'

// react-redux
import {Provider} from 'react-redux'

// initialStore
const initialStore = {
  cart : cartItems,
  total: 110,
  amount: 5
}

// store
const store = createStore(reducer, initialStore, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
