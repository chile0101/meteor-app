import React, { Component } from 'react'
import {Link} from "react-router-dom";


class DataboardMenu extends Component{
    render(){
        console.log(this.props.match)
    
        return(
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
                           
                            <Link to = "admin/databoard/orders">
                                <li>
                                    <img src = "/orders-dark/orders-dark.png"/>
                                    <span>Orders</span>
                                </li>
                            </Link>
                            <Link to = "admin/databoard/products">
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
        )
    }
}

export default DataboardMenu
