import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

//------------------API------------------------
import {Products} from '../api/products.js'

//----------------Component--------------------
import Header from './Header'
import Home from './Home'
import AllProduct from './AllProduct'
import ProductDetail from './ProductDetail'
import Cart from './Cart'
import Footer from './Footer'
import NotFound from './pages/NotFound'

class App extends Component{
 
  render(){
    return( 
      <div>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Home} products={this.props.products} />
            <Route exact  path ="/detail" component={ProductDetail}/>
            <Route exact  path ="/products" component={AllProduct}/>
           
            <Route path="/cart" component={Cart}/>
            <Route component={NotFound} />
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    )
  }
}

export default withTracker(() => {
    return {
      currentUser: Meteor.user()
    };
  })(App);





