import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Products from './components/Products'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/Products" component={Products}/>
          <Route render={() => <Redirect to="/"/>}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
