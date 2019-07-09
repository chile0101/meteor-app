import React,{Component} from 'react'


class BreadCrumb extends Component{
    render(){
        return(
            <div className="bread-crumb">
                <ul >
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Pictures</a></li>
                    <li><a href="#">Summer 15</a></li>
                </ul>
            </div>
        )
    }

}

export default BreadCrumb
