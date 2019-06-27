import React,{Component} from 'react'

class Footer extends Component{
    render(){
        return(
<div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <a><img src="./logo/logo.png" /></a>
                </div>
                <div className="col-6">
                <div className="footer-menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
                </div>
                <div className="col-3 text-right">
                <div>
                    <a><img src="./twitter-grey/twitter-grey.png" /></a>
                    <a><img src="./facebook-icon/facebook-icon.png" /></a>
                    <a><img src="./instagram-6-icon/instagram-6-icon.png" /></a>
                </div>
                </div>
            </div>
            <hr className="footer-line" />
            <div className="row footer-bot">
                <div className="col-6">
                <div className="footer-bot-menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
                </div>
                <div className="col-6 text-right">
                <div>
                    <a>Privacy Policy</a> &nbsp;
                    <a>Term &amp; Condition</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        )
    }
}

export default Footer