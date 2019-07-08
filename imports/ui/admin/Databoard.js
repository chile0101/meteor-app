import React, { Component } from 'react'

class Databoard extends Component{
    render(){
        return(
            
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
                            <li>
                                <img src = "/orders-dark/orders-dark.png"/>
                                <span>Orders</span>
                            </li>
                            <li>
                                <img src = "/products-dark/products-dark.png"/>
                                <span>Products</span>
                            </li>
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
                <div className="wrapper-content">
                    <div className="info-bar">
                        <h4 className="tab-name">Products</h4>
                        <div className="float-right">
                            <img src="/profile/profile.jpg"/>
                            <span>Chile</span>
                                <div className="mail-noti">
                                    <img src="/mail/mail.png"/>
                                    <div className="Oval"
                                </div>
                                <div className="noti">
                                    <img src ="/notification/notification.png"/>
                                </div>
                                
                        </div>
                    </div>
                    <div className="row">
                        <span>Products</span>
                    </div>
                    
                </div>
             
            </div>

        )
    }
}

export default Databoard