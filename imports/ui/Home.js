import React,{Component} from 'react'

class Home extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="outstanding">
                            <img src="./slider/slider.jpg" />
                            <h2>OUTFIT OF THE WEEK</h2>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="row categories">
                    <div className="col-3">
                        <div className="cate">
                            <a href="#">
                            <img src="./products/IMG_5535_grande.jpg" />
                            <div className="cate-sub ">
                                <p>Men</p>
                                <hr />
                                <button>Shop now</button>
                            </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="cate">
                            <a href="#">
                            <img src="./products/product2.jfif" />
                            <div className="cate-sub ">
                                <p>Men</p>
                                <hr />
                                <button>Shop now</button>
                            </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="cate">
                            <a href="#">
                            <img src="./products/product2.jfif" />
                            <div className="cate-sub ">
                                <p>Men</p>
                                <hr />
                                <button>Shop now</button>
                            </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="cate">
                            <a href="#">
                            <img src="./products/product2.jfif" />
                            <div className="cate-sub ">
                                <p>Men</p>
                                <hr />
                                <button>Shop now</button>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home