import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

export const Products = new Mongo.Collection('products');

if(Meteor.isServer){
    
    Meteor.publish('products', () => {
        return Products.find({});
    });
}
