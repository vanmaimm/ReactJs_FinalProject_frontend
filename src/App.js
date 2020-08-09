import React, {Component} from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router >       
        <Switch>
            <Route path="/">
              <Header/>
            </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;