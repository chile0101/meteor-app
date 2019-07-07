import React,{Component} from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor';

// api
import {Products} from '../api/products.js'

// components
import CompoundSlider from './CompoundSlider';
import BreadCrumb from './Breadcrumb';
import SizeBox from './SizeBox';
import ColorBox from './ColorBox'
import BrandList from './BrandList';
import AvailabelList from './AvailabelList';
import ProductCard from './ProductCard'


class AllProduct extends Component{
    constructor(props){
        super(props)
        this.state = {
            showSize : false,
            showColor: false,
            showBrand: false,
            showPrice: false,
            showAvailable: false,
        }
    }
    onToggleSize =  () => {
        this.setState({
            showSize: !this.state.showSize,
        })
    }
    onToggleColor =  () => {
        this.setState({
            showColor: !this.state.showColor,
        })
    }
    onToggleBrand =  () => {
        this.setState({
            showBrand: !this.state.showBrand,
        })
    }
    onTogglePrice =  () => {
        this.setState({
            showPrice: !this.state.showPrice,
        })
    }
    onToggleAvailable =  () => {
        this.setState({
            showAvailable: !this.state.showAvailable,
        })
    }
    renderProducts(){
        //console.log(this.props.products)
        return this.props.products.map((product,index) =>(
            <ProductCard key={index} product ={product}/>
        ))
    }
    render(){
       // console.log(this.props.products)
        return(
            <div className="container">
                <BreadCrumb/>
                <div className="row">
                    <div className="col-2">
                        <span className = "cate-filter-text">Category</span>
                    </div>
                    <div className="col-2">
                        <div className="drop-down">
                            <button>Popularity<img src="./arrow-black/arrow-black.png"/></button>
                            <div className="drop-content">
                                <a href="#">Popularity</a>
                                <a href="#">Name: A - Z</a>
                                <a href="#">Lowest to highest</a>
                                <a href="#">Highest to lowest</a>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-8 text-right">
                        <div className="paginationn">
                            <button><img src="./arrow-black/arrow-black.png"/></button>
                            <span>1/100</span>
                            <button><img src="./arrow-black/arrow-black.png"/></button>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-2">
                        <div className="category">
                            <ul>
                                <li><a href="#">All dresses</a></li>
                                <li><a href="#">Rompers / Jumpsuits</a></li>
                                <li><a href="#">Casual dresses</a></li>
                                <li><a href="#">Going out dresses</a></li>
                                <li><a href="#">Party / Ocassion dresses</a></li>
                                <li><a href="#">Mini dresses</a></li>
                                <li><a href="#">Maxi / Midi dresses</a></li>
                                <li><a href="#">Sets</a></li>
                            </ul>
                        </div>
                        <hr/>
                        <div className="filter">
                            <span className = "cate-filter-text">Filter</span>
                            <div className="accordion-list">
                                <ul >
                                    <li>
                                        <div className="accordion-item">
                                            <div className="accordion-item-header" onClick={this.onToggleSize}>
                                                <span href="#">Size</span>
                                                <img src="./arrow-black/arrow-black.png"/>
                                            </div>
                                            {this.state.showSize ? <SizeBox/> : null}                                       
                                        </div>
                                    </li>
                                    <li>
                                        <div className="accordion-item">
                                            <div className="accordion-item-header" onClick={this.onToggleColor} >
                                                <span href="#">Color</span>
                                                <img src="./arrow-black/arrow-black.png"/>
                                            </div>

                                           {this.state.showColor ? <ColorBox/>:null}

                                        </div>
                                    </li>
                                    <li>
                                        <div className="accordion-item">
                                            <div className="accordion-item-header" onClick={this.onToggleBrand}>
                                                <span href="#">Brand</span>
                                                <img src="./arrow-black/arrow-black.png"/>
                                            </div>

                                            {this.state.showBrand ? <BrandList/> : null}

                                        </div>
                                    </li>
                                    <li>
                                        <div className="accordion-item">
                                            <div className="accordion-item-header" onClick={this.onTogglePrice}>
                                                <span href="#">Price</span>
                                                <img src="./arrow-black/arrow-black.png"/>
                                            </div>

                                            {this.state.showPrice ? <CompoundSlider/> : null}
                                            
                                        </div>
                                    </li>
                                    <li>
                                        <div className="accordion-item">
                                            <div className="accordion-item-header" onClick={this.onToggleAvailable}>
                                                <span href="#">Available</span>
                                                <img src="./arrow-black/arrow-black.png"/>
                                            </div>

                                            {this.state.showAvailable ? <AvailabelList/> : null}

                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="col-10">
                            <div className="row">
                           
                                {this.renderProducts()}
                          
                            </div>
                        </div>
                   
                </div>
                <div className="row">
                <div className="col text-right">
                    <div className="paginationn">
                        <button><img src="./arrow-black/arrow-black.png"/></button>
                        <span>1/100</span>
                        <button><img src="./arrow-black/arrow-black.png"/></button>
                    </div>
                </div>   
                </div>


            </div>
        )
    }

}

export default withTracker(() => {
    Meteor.subscribe('products')
    return {
      products: Products.find({}).fetch(),
    };
  })(AllProduct);
