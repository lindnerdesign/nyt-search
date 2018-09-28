import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css"

const App = () => (
  <Router>
    <div>
      <Jumbotron />
        <Switch>
          <Route exact path="/" component={Body} />
         
        </Switch>
      <Footer />
    </div>
  </Router>
 );

export default App;
