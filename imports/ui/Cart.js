import React,{Component} from 'react'

class Cart extends Component{
    render(){
        return(
            <div className="container">
                <p className="myBagText">My Bag</p>
                <div className="row">
                    <div className="col-8">
                        <div className="list-item-ordered">
                            <table>
                                <tr>
                                    <th>Product</th>
                                    <th className="text-center">Color</th> 
                                    <th className="text-center">Size</th>
                                    <th className="text-center">Quantity</th>
                                    <th className="text-center">Amount</th> 
                                </tr>
                                <tr>
                                    <td >
                                        <div className="product-detail-selected">
                                            <img src="/products/img1.webp"/>
                                            <p>Collete Stretch Linen Minidress</p>
                                            <div className="change-remove-btn">
                                                <span>Change</span><span>Remove</span>   
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <div className="color-box-selected"></div>
                                    </td> 
                                    <td className="text-center">
                                        <span className="size-selected">S</span>
                                    </td>
                                    <td className="text-center">
                                        <div className="quantity-selected">
                                            <button className="reduce"><img src="/plus-black/plus-black.png"/></button>
                                            <input type="text" maxLength="3" value="1" ></input>
                                            <button className="add"><img src="/minus-black/minus-black.png"/></button>
                                        </div>
                                    </td>
                                    <td className="text-center">   
                                        <span className="size-selected">$69.00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                        <div className="product-detail-selected">
                                            <img src="/products/img1.webp"/>
                                            <p>Collete Stretch Linen Minidress</p>
                                            <div className="change-remove-btn">
                                                <span>Change</span><span>Remove</span>   
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <div className="color-box-selected"></div>
                                    </td> 
                                    <td className="text-center">
                                        <span className="size-selected">S</span>
                                    </td>
                                    <td className="text-center">
                                        <div className="quantity-selected">
                                            <button className="reduce"><img src="/plus-black/plus-black.png"/></button>
                                            <input type="text" maxLength="3" value="1" ></input>
                                            <button className="add"><img src="/minus-black/minus-black.png"/></button>
                                        </div>
                                    </td>
                                    <td className="text-center">   
                                        <span className="size-selected">$69.00</span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="col-4">
                        <p className="total-text">Total</p>
                        <div className="total">
                            
                            <div className="total-detail">
                                <span>Shipping & Handling: </span><span className="text-float-right">Free</span><br/>
                                <span>Total product</span><span className="text-float-right">$69.00</span>
                                <hr/>
                                <div className="total-price">
                                    <span>Subtotal</span><span className="text-float-right">$69.00</span>
                                </div>
                                
                            </div>
                            <button><span>Check out</span></button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default Cart 