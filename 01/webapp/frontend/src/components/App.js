import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layouts/header";
import Dashboards from "./leads/Dashboards";
import { Provider } from "react-redux";
import store from "../store";

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <Header />
      <h1 className="lead text-success">Kazibwe Julius Junior</h1>
      <Dashboards />
    </React.Fragment>
  </Provider>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
