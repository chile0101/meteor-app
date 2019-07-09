import React,{Component} from 'react'


class SizeBox extends Component{
    render(){
        return(
            <div className="accordion-item-content">
                <div className="size-box-selected"><span>S</span></div>
                <div className="size-box"><span>M</span></div>
                <div className="size-box"><span>L</span></div>
            </div>
        )
    }

}

export default SizeBox
