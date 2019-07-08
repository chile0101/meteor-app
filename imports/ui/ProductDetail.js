import React,{Component} from 'react'
import { Session } from 'meteor/session'

class ProductDetail extends Component{
   
    render(){
    
        if(this.props.productExists){
            const product = this.props.product
            
        return(
            <div className="container">
                <div className="bread-crumb">
                    <ul >
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Pictures</a></li>
                        <li><a href="#">Summer 15</a></li>
                    </ul>
                </div>
                <div className ="row">
                    <div className="col-1">
                        <div className="img-thumb">
                            <ul>
                                <li><img src = {product.img[1] } /></li>
                                <li><img src = {product.img[2] } /></li>
                                <li><img src = {product.img[3] } /></li>
                                <li><img src = {product.img[4] }/></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="img-show">
                            <img  src = {product.img[0]} />
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="product-options">
                            <p>{product.name}</p>
                            <p>${product.price}</p>
                            <div className="reviews-detail">
                                <ul>
                                    <li><img src="/star/star.png"/></li>
                                    <li><img src="/star/star.png"/></li>
                                    <li><img src="/star/star.png"/></li>
                                    <li><img src="/star/star.png"/></li>
                                    <li><img src="/star/star.png"/></li>
                                </ul>
                                <span>0 Review</span>
                            </div>
                            <div className="size-color">
                                <p>Size</p>
                                <div className="accordion-item-content">
                                    <div className="size-box-selected"><span>S</span></div>
                                    <div className="size-box"><span>M</span></div>
                                    <div className="size-box"><span>L</span></div>
                                </div>
                                <p>Color</p>
                                <div className="accordion-item-content">
                                    <div className="color-box-selected"></div>
                                    <div className="color-box"></div>
                                    <div className="color-box"></div>
                                </div>  
                            </div>
                            <div className="quantity">
                                <span>Quantity</span>
                                <button className="reduce"><img src="/plus-black/plus-black.png"/></button>
                                <input type="text" maxLength="3" defaultValue="1" ></input>
                                <button className="add"><img src="/minus-black/minus-black.png"/></button>
                            </div>
                            <button className="addcart-btn"><span>Add to cart</span></button>
                            <hr/>
                            <div className="descript">
                                <p>Model wearing size S <br/>
                                    - Cheast: 36'' <br/>
                                    - Length: 25.75''</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-1">
                        <div className="more-from">
                            <p>More</p>
                            <p>Zara</p>
                            <div className="img-thumb-cp">
                                <ul>
                                    <li><img src ="/products/img1.webp"/></li>
                                    <li><img src ="/products/img2.webp"/></li>
                                    <li><img src ="/products/img3.webp"/></li>
                                    <li><img src ="/products/img4.webp"/></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    
                </div>
                <div className="row mt-3">
                    <div className="col-1">
                        <hr/>
                    </div>
                    <div className="col-1">
                        <span className="review-line">Review</span>
                    </div>
                    <div className="col-10">
                        <hr/>
                    </div>

                </div>
               
                <div className="reviews">
                    <div className="row review-row">
                        <div className="col-1"></div>
                        <div className="col-2">
                            <div className="reviewer">
                                <p>You</p>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="review-form">
                                <form>
                                    <input type="text" name= "title" placeholder="TITLE"></input>
                                    <textarea name="comment" placeholder="Add your comment here..."></textarea>
                                    <p>Rating for us:</p>
                                    <div className="star-review-in-form">
                                        <ul>
                                            <li><img src="/star-active/star-active.png"/></li>
                                            <li><img src="/star-active/star-active.png"/></li>
                                            <li><img src="/star-active/star-active.png"/></li>
                                            <li><img src="/star-active/star-active.png"/></li>
                                            <li><img src="/star/star.png"/></li>
                                        </ul>
                                    </div>
                                    <button type="submit"><span>Submit</span></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                    <div className="row review-row">
                        <div className="col-1"></div>
                        <div className="col-2">
                            <div className="reviewer">
                                <p>You</p>
                                <span>Edit</span><span>Delete</span>
                                
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="star-review">
                                <ul>
                                    <li><img src="/star-active/star-active.png"/></li>
                                    <li><img src="/star-active/star-active.png"/></li>
                                    <li><img src="/star-active/star-active.png"/></li>
                                    <li><img src="/star-active/star-active.png"/></li>
                                    <li><img src="/star/star.png"/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row review-row">
                        <div className="col-1"></div>
                        <div className="col-2">
                            <div className="reviewer">
                                <p>Amber Arnold</p>
                                <span>30 Jul</span>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="review-info">
                                <span>Adorable but tight!!</span>
                                <div className="star-review">
                                    <ul>
                                        <li><img src="/star-active/star-active.png"/></li>
                                        <li><img src="/star-active/star-active.png"/></li>
                                        <li><img src="/star-active/star-active.png"/></li>
                                        <li><img src="/star-active/star-active.png"/></li>
                                        <li><img src="/star/star.png"/></li>
                                    </ul>
                                </div>
                                <p>I purchased this dress thinking it fit loose as pictured, but it fits like a glove, 
                                    although i still love the still and its very cute
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row text-right">
                        <div className="col">
                            <div className="paginationn">
                                <button><img src="/arrow-black/arrow-black.png"/></button>
                                <span>1/7</span>
                                <button><img src="/arrow-black/arrow-black.png"/></button>
                            </div>
                        </div>
                            
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-1">
                        <hr/>
                    </div>
                    <div className="col-2">
                        <span className="review-line">You may also like</span>
                    </div>
                    <div className="col-9">
                        <hr/>
                    </div>

                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <div className="product-refer">
                                    <img src='/products/p1.jpg'/>
                                    <p>Collete Stretch Linen Minidress</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="product-refer">
                                    <img src='/products/p1.jpg'/>
                                    <p>Collete Stretch Linen Minidress</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="product-refer">
                                    <img src='/products/p1.jpg'/>
                                    <p>Collete Stretch Linen Minidress</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="product-refer">
                                    <img src='/products/p1.jpg'/>
                                    <p>Collete Stretch Linen Minidress</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        )

        }else{
            return(
                <h2>Product not found</h2>
            )
        }
    }

}

export default ProductDetail 
