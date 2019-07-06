import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

export const Products = new Mongo.Collection('products');

if(Meteor.isServer){
    
    Meteor.publish('products', function productsPublication() {
        return Products.find();
    });
}

// Meteor.methods({
//     'products.insert'(text) {
//         check(text, String);
   
     
//         // if (! this.userId) {
//         //     throw new Meteor.Error('not-authorized');
//         // }

//         Products.insert({
//             text,
//             createdAt: new Date(),
//             owner: this.userId,
//         });
//     },
    
//   });