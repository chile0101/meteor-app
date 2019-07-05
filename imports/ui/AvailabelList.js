import React,{Component} from 'react'


class AvailabelList extends Component{
    render(){
        return(
            <div className="accordion-item-content">
                <div className="availabel-list">
                    <ul>
                        <li><span>In-store</span><img src="./checkbox-orange/checkbox-orange.png"/></li>
                        <li><span>Out of stock</span><img src="./checkbox-orange/checkbox-orange.png"/></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AvailabelList


