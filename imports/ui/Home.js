import React,{Component} from 'react'
import { BrowserRouter as Router, Route,Switch,Link,Redirect } from "react-router-dom";
import AllProduct from './AllProduct';

class Home extends Component{
    render(){
        
        return(
            
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="outstanding">
                            <img src="./slider/slider-final.PNG" />
                            {/* <h2>OUTFIT OF THE WEEK</h2> */}
                            <Link to="/products"><button >Shop Now</button></Link>
                        </div>
                    </div>
                </div>
                <div className="row categories">
                    <div className="col-3">
                        <div className="cate">
                            <Link to="/products">
                                <img src="./products/p1.jpg" />
                                <div className="cate-sub ">
                                    <p>Men</p>
                                    <hr />
                                    <button>Shop now</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="cate">
                            <Link to="/products">
                                <img src="./products/p2.jpg" />
                                <div className="cate-sub ">
                                    <p>Ladies</p>
                                    <hr />
                                    <Link to="/products"><button>Shop now</button></Link>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="cate">
                            <Link to="/products">
                                <img src="./products/p3.jpg" />
                                <div className="cate-sub ">
                                    <p>Girl</p>
                                    <hr />
                                    <Link to="/products"><button>Shop now</button></Link>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="cate">
                            <Link to="/products">
                                <img src="./products/p4.jpg" />
                                <div className="cate-sub ">
                                    <p>Boy</p>
                                    <hr />
                                    <Link to="/products"><button>Shop now</button></Link>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            
            
        )
    }
}

export default Home