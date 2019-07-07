import React,{Component} from 'react'
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";

class ProductCard extends Component{
    render(){
        const product = this.props.product
        const id = product._id
        return(
            <div className="col-product">
                <div className="product-cart">
                    <Link to ={'/products/'+ id} >
                        <div className="product-front">
                            <img className="product-img" src = {product.img[0]}/>
                            <button><img src="./plus-white/plus-white.png"/><span>Quick shop</span></button>
                            {/* <label>Sold out</label> */}
                        </div>
                        <h5>{this.props.product.name}</h5>
                    </Link>
                    <span>${product.price}</span>
                </div>
            </div>
        )
    }
}

export default ProductCard