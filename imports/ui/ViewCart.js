import React,{Component} from 'react'

class ViewCart extends Component{
    render(){
        return(
                <div className="view-cart">
                    <ul>    
                        <li>
                            <img src="./products/img1.webp"/>
                            <div className="view-cart-content">
                                <p>New Balance Men's Street Backpack</p>
                                <span>$485</span>
                                <div className="item-details">
                                    <span>S</span> <span>Black</span><span>1pcs</span>
                                </div>
                            </div>  
                        </li>
                        <li>
                            <img src="./products/img1.webp"/>
                            <div className="view-cart-content">
                                <p>New Balance Men's Street Backpack</p>
                                <span>$485</span>
                                <div className="item-details">
                                    <span>S</span> <span>Black</span><span>1pcs</span>
                                </div>
                            </div>  
                        </li>
                    </ul>
                    <div className="view-cart-btn">
                        <button><span>View cart</span></button> 
                    </div>
                </div>
        )
    }
}

export default ViewCart

 