import Homepage from "./Homepage";
import ShoppingCart from "./ShoppingCart";
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div
          className="d-flex justify-content-between bg-dark text-white"
          style={{
            width: "100%",
            backgroundColor: "#14213d",
            color: "#e5e5e5",
          }}
        >
          <div style={{ fontSize: "36px", margin: "10px" }}>Logo</div>

          <ul
            className="float-right d-flex m-3"
            style={{ listStyle: "none", textDecoration: "none" }}
          >
            <li>
              <Link className="p-5" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="p-5" to="/cart">
                Shopping Cart
              </Link>
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
