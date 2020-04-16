import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { routing } from "./redux/reducers/routing";
import { BrowserRouter } from "react-router-dom";

const reducers = combineReducers({
  routing,
});
const middleware = [thunk];

const store = createStore(reducers, applyMiddleware(...middleware));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
