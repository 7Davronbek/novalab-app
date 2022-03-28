import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { rootReducer } from "./redux/reducers/rootReducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import SeeUser from "./components/pages/SeeUser";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>

      <Navbar />

      <Switch>

        <Route path="/" exact component={App} />
        <Route path="/users/:id" exact component={SeeUser} />

      </Switch>

    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
