import React, {Component} from 'react'

class AdOrder extends Component{
    render(){
        return(
            <div className="wrapper-content">
                    <div className="info-bar">
                        <h4 className="tab-name">Order</h4>
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
                    <tbody>
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
                                <button className="status-label">Completed</button>
                            </td>
                            <td>
                                <div className="action-dropdown">
                                    <span>Action</span>
                                    <img src="/dropdown/dropdown.png"/>
                                    <ul>
                                        <li>
                                            <div className="action-oval-green"></div>
                                            <span>Mark as Completed</span>
                                        </li>
                                        <li>
                                            <div className="action-oval-red"></div>
                                            <span>Mark as Canceled</span>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>AB12345</td>
                            <td>Today,8th,2019</td>
                            <td>Collete Stretch Linen Minidress (M) x 1</td>
                            <td>60.00</td>
                            <td>
                                <button className="status-label">Completed</button>
                            </td>
                            <td>
                                <div className="action-dropdown">
                                    <span>Action</span>
                                    <img src="/dropdown/dropdown.png"/>
                                    <ul>
                                        <li>
                                            <div className="action-oval-green"></div>
                                            <span>Mark as Completed</span>
                                        </li>
                                        <li>
                                            <div className="action-oval-red"></div>
                                            <span>Mark as Canceled</span>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>AB12345</td>
                            <td>Today,8th,2019</td>
                            <td>Collete Stretch Linen Minidress (M) x 1</td>
                            <td>60.00</td>
                            <td>
                                <button className="status-label">Completed</button>
                            </td>
                            <td>
                                <div className="action-dropdown">
                                    <span>Action</span>
                                    <img src="/dropdown/dropdown.png"/>
                                    <ul>
                                        <li>
                                            <div className="action-oval-green"></div>
                                            <span>Mark as Completed</span>
                                        </li>
                                        <li>
                                            <div className="action-oval-red"></div>
                                            <span>Mark as Canceled</span>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                   
                   <div className="panigation-wrapper">
                       <span>Show 1 to 10 of 123 entries</span>
                       <div className="float-right">
                           <ul>
                               <li className="page-current"><img src="/pagination/first-page.png"/></li>
                               <li><img src="/pagination/prev.png"/></li>
                               <li>1</li>
                               <li>2</li>
                               <li>3</li>
                               <li>4</li>
                               <li>5</li>
                               <li className="page-current"><img src="/pagination/next.png"/></li>
                               <li><img src="/pagination/last-page.png"/></li>
                           </ul>
                       </div>
                   </div>
                    
            </div>
        )
    }
}

export default AdOrder