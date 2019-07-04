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
                                    <th>Color</th> 
                                    <th>Size</th>
                                    <th>Quantity</th>
                                    <th>Amonut</th> 
                                    <th>Total</th>
                                </tr>
                                <tr>
                                    <td >
                                        <img src="./products/img1.webp"/>
                                        <p>Collete Stretch Linen Minidress</p>
                                        <span>Change</span><span>Remove</span>
                                    </td>
                                    <td>Smith</td> 
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>Jill</td>
                                    <td>Smith</td> 
                                    <td>50</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="col-4">
                        chekout
                    </div>
                </div>

            </div>
        )
    }

}

export default Cart 