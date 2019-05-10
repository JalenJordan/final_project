import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import Products from './components/Products'
import Single from './components/Single'
import Checkout from './components/Checkout'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/Products" component={Products}/>
            <Route path="/items/:id/:name" component={Single}/>
            <Route path="/store/:id" component={Products}/>
            <Route path="/Checkout" component={Checkout}/>
            <Route render={() => <Redirect to="/"/>}/>
          </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App;
