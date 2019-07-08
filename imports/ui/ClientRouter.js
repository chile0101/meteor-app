import React,{Component} from 'react'
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

import Header from './Header'
import Home from './Home'
import AllProduct from './AllProduct'
import ProductDetailContainer from './ProductDetailContainer'
import Cart from './Cart'
import Footer from './Footer'
import NotFound from './pages/NotFound'

class ClientRouter extends Component{
    render(){
        return(
            <div >
                <Header></Header>
                <Switch>
                    <Route exact  path = "/" component={Home} />
                    <Route exact  path = "/products/:id" component ={ProductDetailContainer}/>
                    <Route exact  path = "/products" component={AllProduct}/>
                    <Route exact  path = "/cart" component={Cart}/>
                    
                    <Route component={NotFound} />
                </Switch>
                <Footer></Footer>
          </div>
        )
    }
}
export default ClientRouter