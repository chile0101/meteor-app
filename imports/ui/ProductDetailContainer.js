import React,{Component} from 'react'
import { withTracker } from 'meteor/react-meteor-data'

// conponent
import ProductDetail from './ProductDetail'
// api
import {Products} from '../api/products.js'

export default withTracker(({match}) => {

    const id = match.params.id
    //console.log(id)

    const productSub = Meteor.subscribe('products')

    const ready = productSub.ready();
    const product = Products.findOne(id);
    
    const listExists = ready && product;
    return {
        ready,
        product: listExists ? product : [],
    };
    
    //if(productsSub.ready()){
            // return {
            //     product: Products.find({_id: id}).fetch(),
            // }
    //}else{
    //     return {
    //         product: [],
    //     }
    // }
  })(ProductDetail);


