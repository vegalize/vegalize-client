import React, { useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { generateRoute } from "../helpers/routingHelper";
import { setRoutingDone } from "../redux/actions/routing";
import NavbarCommon from "./common/NavbarCommon/NavbarCommon";
import Home from "./Home/Home";

const routes = [generateRoute("/", true, () => <Home />)];

const App = ({ history }) => {
  const dispatch = useDispatch();
  let newRoute = useSelector((state) => state.routing.pushTo);

  useEffect(() => {
    if (newRoute) {
      history.push(newRoute);
      dispatch(setRoutingDone());
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [newRoute, dispatch, history]);

  return (
    <>
      <NavbarCommon />
      <Home />
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={i}
            path={`/app${route.path}`}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </>
  );
};

export default withRouter(App);
