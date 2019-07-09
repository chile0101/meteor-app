import React, { Component } from 'react'
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom"
import Orders from '../components/AdOrder'
import Products from '../components/AdProduct'

class AdDataboard extends Component{
    render(){
        const base_url = this.props.match.url
        
        return(
            <Router>
                <div className = "databoard">
                    <div className="wrapper-menu">
                            <div className = "logo">
                                <img src="/logo/logo.png"/>
                            </div>

                            <div className="board-menu">
                                <ul>
                                
                                        <li>
                                            <img src = "/overview-dark/overview-dark.png"/>
                                            <span>Overview</span>
                                        </li>
                                
                                    <Link to = {base_url+"/orders"} >
                                        <li>
                                            <img src = "/orders-dark/orders-dark.png"/>
                                            <span>Orders</span>
                                        </li>
                                    </Link>
                                    <Link to = {base_url+"/products"}>
                                        <li>
                                            <img src = "/products-dark/products-dark.png"/>
                                            <span>Products</span>
                                        </li>
                                    </Link>
                                    <li>
                                        <img src = "/payment-dark/payment-dark.png"/>
                                        <span>Payments</span>
                                    </li>
                                    <li>
                                        <img src = "/promotion-dark/promotion-dark.png"/>
                                        <span>Promotions</span>
                                    </li>
                                    <li>
                                        <img src = "/setting-dark/setting-dark.png"/>
                                        <span>Setting</span>
                                    </li>
                                </ul>
                            </div>
                        </div>  
                </div>

                <Route exact path = {base_url+"/orders"} component ={Orders} />
                <Route exact path = {base_url+"/products"} component ={Products} />
            </Router>

        )
    }
}

export default AdDataboard