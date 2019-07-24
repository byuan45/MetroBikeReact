import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//since this is a class we have to not include the curly braces
import Home from "./Home";
import Data from "./Data";
import { About } from "./About";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/layout";
import { NavBar } from "./components/navBar";
import { Jumbotron } from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/data" component={Data} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
