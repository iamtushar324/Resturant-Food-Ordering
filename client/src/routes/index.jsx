import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import Cart from "pages/Cart";

export default function AppRoute() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
