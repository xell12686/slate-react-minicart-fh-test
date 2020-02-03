import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MiniCart from './MiniCart';
import Product from '../templates/Product';

import './App.scss';

function App() {
  const [ isLoaded, setLoaded ] = useState(false);
  const [ data, setData ] = useState({});
  
  useEffect(() => {

    // document.getElementById("addToCart").addEventListener("click", handleAddToCart);
  }, [isLoaded]);

  return (
    <div className="App">
        <Router>
          <Route
            path="/products/:handle"
            exact
            render={(props) => <Product {...props } /> }
          >
          </Route>
        </Router>
        {/* <MiniCart /> */}
    </div>
  );
}

export default App;
