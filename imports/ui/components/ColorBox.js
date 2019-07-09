import React,{Component} from 'react'


class ColorBox extends Component{
    render(){
        return(
            <div className="accordion-item-content">
                <div className="color-box-selected"></div>
                <div className="color-box"></div>
                <div className="color-box"></div>
           </div>
        )
    }
}

export default ColorBox


