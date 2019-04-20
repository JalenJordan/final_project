import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'

// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       products: []
//     }
//   }
//   componentDidMount(){
//     fetch("http://localhost:8000/api/store/")
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           products: data
//         })
//         console.log(data);
//       })
//   }
//   render(){
//     const product = this.state.products.map(item, id) => <Product key={item}
//   }
// }

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
          <Switch>
            <Home/>
          </Switch>
      </Router>
    );
  }
}

export default App;
