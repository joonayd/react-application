import React from "react";
import TopMenu from "./components/TopMenu";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Products from "./components/products/Products";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import NewProduct from "./components/products/NewProduct";

function App() {
  return (
    <Router>
      <div>
        <TopMenu />
        <div>
          <Switch>
            <Route path="/products" exact component={Products} />
            <Route path="/products/new" component={NewProduct} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={LandingPage} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
