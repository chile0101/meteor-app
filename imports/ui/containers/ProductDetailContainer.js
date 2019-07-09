import React,{Component} from 'react'
import { withTracker } from 'meteor/react-meteor-data'

// conponent
import ProductDetail from '../pages/ProductDetail'
// api
import {Products} from '../../api/products'

export default withTracker(({match}) => {

    const id = match.params.id
    console.log(id)

    const productSub = Meteor.subscribe('products')

    const ready = productSub.ready();
    const product = Products.findOne(id);
    const productExists = ready && product;

    return {
        ready,
        product,
        productExists,
        product: productExists ? product : [],
    };

  })(ProductDetail);


