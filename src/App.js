import Homepage from "./Homepage";
import ShoppingCart from "./ShoppingCart";
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <div>Logo - Main page</div>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/cart">Shopping Cart</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
