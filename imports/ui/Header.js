import React,{Component} from 'react'

class Header extends Component{
    onRegister(event){
        console.log('clicked')
    }

    render(){
        return(
            <div>
            <div className="container">
                <div className="header">
                    <div className="row">
                        <div className="col-4">
                            <div className="row">
                                <div className="col-6">
                                <form className="search-form">
                                    <input type="text" placeholder="Search.." name="search" />
                                    <button type="submit" className="btn-search"><img src="./search/search.png" /></button>
                                </form>
                                </div>
                                <div className="col-6" />
                            </div>
                        </div>

                        <div className="col-4 Logo">
                            <a><img src="./logo/logo.png" /></a>
                        </div>

                        <div className="col-4 text-right">
                            <button className="btn-register" onClick={this.onRegister()}>Register</button> 
                            <button className="btn-login">Log In</button>
                            <a href="#"><img src="./cart/cart.png" className="Cart" /></a>
                            <div className="Oval">7</div>
                        </div>
                    </div>
                    
                </div>
            </div>    
            
            <div className="header-menu">
                <ul>
                    <li>
                        <span>Men</span>
                        <a><img src="./arrow-black/arrow-black.png" /></a>
                    </li>
                    <li>
                        <span>Ladies</span>
                        <a><img src="./arrow-black/arrow-black.png" /></a>
                    </li>
                    <li>
                        <span>Girl</span>
                        <a><img src="./arrow-black/arrow-black.png" /></a>
                    </li>
                    <li>
                        <span>Boy</span>
                        <a><img src="./arrow-black/arrow-black.png" /></a>
                    </li>
                </ul>     
            </div>
            </div>
        )
    }
}

export default Header