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
                            <img className="img-adprofile" src="/profile/profile.jpg"/>
                            
                            <div className="account-option">
                                <span>CHILE</span>
                                <img src="/arrow-black/arrow-black.png"/>
                                <ul>
                                    <li>
                                        <img src="/view-profile/profile.png"/>
                                        <span>View profile</span>
                                    </li>
                                    <li>
                                        <img src="/logout/logout.png"/>
                                        <span>Logout</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="notificationn">
                                <img src="/mail/mail.png"/>
                                <div className='noti-oval'>9+</div>
                            </div>
                            
                            <div className="notificationn">
                                <img src="/notification/notification.png"/>
                                <div className='noti-oval'>9+</div>
                            </div>
                                
                        </div>
                    </div>
                    <div className="function-bar">
                        <div className="calendar-wrapper">
                            <span>ORDERS DATE</span>
                            <button className="btn-calendar">
                                <span>01/08/2018 - 31/08/2018</span> 
                                <img src="/calendar/calendar.png"/>
                            </button>
                            <button className="btn-calendar">
                                <span>Today</span> 
                            </button>
                            <button className="btn-calendar">
                                <span>Yesterday</span>      
                            </button>
                        </div>
                        <div className="float-right">
                            <div className="search-wrapper">
                                <img src="/search/search.png"/>
                                <input type="text" placeholder="Search order"/>
                            </div>
                            
                            <button className="btn-export">
                                <img src="/export-orange/export-orange.png"/>
                                <span>Export</span>      
                            </button>
                           
                        </div>
                    </div>

                    
                    <table className="table-wrapper">
                        <tr>
                            <th>ORDER ID</th>
                            <th>ORDERED DATE</th>
                            <th>DETAIL</th>
                            <th>TOTAL($)</th>
                            <th>STATUS</th>
                        </tr>
                        <tr>
                            <td>AB12345</td>
                            <td>Today,8th,2019</td>
                            <td>Collete Stretch Linen Minidress (M) x 1</td>
                            <td>60.00</td>
                            <td>
                                <button>Completed</button>
                            </td>
                            <td>
                                <div className="action-option">
                                    <span>Action</span>
                                    <img src="/dropdown/dropdown.png"/>
                                    {/* <ul>
                                        <li>
    
                                            <span>Mark as Completed</span>
                                        </li>
                                        <li>
                                            
                                            <span>Mark as Canceled</span>
                                        </li>
                                    </ul> */}
                                </div>
                            </td>
                        </tr>
                    </table>
                   
                    
                </div>
             
            </div>

        )
    }
}

export default Databoard