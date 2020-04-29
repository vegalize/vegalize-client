import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { generateRoute } from "../helpers/routingHelper";
import NavbarCommon from "./common/NavbarCommon/NavbarCommon";
import Home from "./Home/Home";
import Products from "./market/Products/Products";

const App = () => {
  return (
    <>
      <NavbarCommon />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/produtos">
          <Products />
        </Route>
      </Switch>
    </>
  );
};

export default withRouter(App);
