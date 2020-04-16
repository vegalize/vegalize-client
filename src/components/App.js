import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import NavbarCommon from "./common/NavbarCommon/NavbarCommon";
import { generateRoute } from "../helpers/routingHelper";
import Home from "./Home/Home";
import { setRoutingDone } from "../redux/actions/routing";

const App = ({ history }) => {
  const dispatch = useDispatch();
  let newRoute = useSelector((state) => state.routing.pushTo);
  const routes = [generateRoute("/", true, () => <Home />)];

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
