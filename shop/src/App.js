import React from "react";
import TopMenu from "./components/TopMenu";
import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <div>
        <TopMenu />
        <Switch>
          <Route to="/" component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
