import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import ProductDetail from "./containers/ProductDetail";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#C185E6" }}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
