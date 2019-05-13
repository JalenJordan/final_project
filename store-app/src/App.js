import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import Products from './components/Products'
import Products2 from './components/Products2'
import Products3 from './components/Products3'
import Products4 from './components/Products4'
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
            <Route path="/Products2" component={Products2}/>
            <Route path="/Products3" component={Products3}/>
            <Route path="/Products4" component={Products4}/>
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
