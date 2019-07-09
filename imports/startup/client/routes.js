import React,{Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// containers
import AdLoginPage          from '../../ui/pages/AdLoginPage'
import AdDataboard                  from '../../ui/pages/AdDataboard';

import HomePage                     from '../../ui/pages/HomePage'
import AllProduct                   from '../../ui/components/AllProduct'
import ProductDetailContainer       from '../../ui/containers/ProductDetailContainer'






class Routes extends Component{
  render(){
    return(
      <Router>
        <Route exact path = "/"                 component = {HomePage} />
        <Route exact path = "/products/:id"     component = {ProductDetailContainer}/>
        <Route exact path = "/products"         component = {AllProduct} />   

        <Route exact path = "/admin"            component = {AdLoginPage}/>
        <Route exact path = "/admin/databoard/"   component = {AdDataboard}/>
        {/* <Route exact path = "/admin/databoard/products" component = {AdProductsPage}/> */}
      

      </Router>
    )
  }
} 

export default Routes