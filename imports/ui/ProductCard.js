import React,{Component} from 'react'

class ProductCard extends Component{
    render(){
        const product = this.props.product
        console.log(product.img[0])
        return(
            <div className="col-3">
                <div className="product-cart">
                    <div className="product-front">
                        <img className="product-img" src = {product.img[0]}/>
                        <button><img src="./plus-white/plus-white.png"/><span>Quick shop</span></button>
                    </div>
                    <h5>{this.props.product.name}</h5>
                    <span>${product.price}</span>
                </div>
            </div>
        )
    }
}

export default ProductCard