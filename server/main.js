import { Meteor } from 'meteor/meteor';
import { Products } from '../imports/api/products';


Meteor.startup(() => {
  if (Products.find().count() === 0) {
    Products.insert({   name: "Collete Stretch Linen Minidress",
                        price: 60.00,
                        quantity: 28,
                        img: ["/products/p1/p1.1.webp",
                              "/products/p1/p1.2.webp",
                              "/products/p1/p1.3.webp",
                              "/products/p1/p1.4.webp",
                              "/products/p1/p1.5.webp"],
                        size : ["S","M","L"],
                        color: ["red","green","blue"],
                        type: "ladies",
                        reviews:[]  ,
                        createAt: new Date() 
                        });

    Products.insert({   name: "Button-Down Denim Mini Dress",
                        price: 61.00,
                        img: ["/products/p2/p2.1.webp",
                              "/products/p2/p2.2.webp",
                              "/products/p2/p2.3.webp",
                              "/products/p2/p2.4.webp",
                              "/products/p2/p2.5.webp"],
                        size : ["S","M","L"],
                        color: ["red","green","blue"],
                        type: "ladies",
                        quantity: 12,
                        reviews:[]  ,
                        createAt: new Date() 
                    });

    Products.insert({   name: "Plunge V-neck Denim Mini Dress",
                        price: 62.00,
                        img: ["/products/p3/p3.1.jpg",
                              "/products/p3/p3.2.webp",
                              "/products/p3/p3.3.webp",
                              "/products/p3/p3.4.webp",
                              "/products/p3/p3.5.webp"],
                        size : ["S","M","L"],
                        color: ["red","green","blue"],
                        type: "ladies",
                        quantity: 20,
                        reviews:[]  ,
                        createAt: new Date() 
                    });
    Products.insert({   name: "Surplice Gingham Jumpsuit",
                        price: 63.00,
                        quantity: 12 ,
                        img: ["/products/p4/p4.1.webp",
                              "/products/p4/p4.2.webp",
                              "/products/p4/p4.3.webp",
                              "/products/p4/p4.4.webp",
                              "/products/p4/p4.5.webp"],
                        size : ["S","M","L"],
                        color: ["red","green","blue"],
                        type: "ladies",
                        reviews:[]  ,
                        createAt: new Date() 
                    });
    Products.insert({   name: "Hermosa Ladder Lace Midi Dress",
                        price: 64.00,
                        quantity: 12 ,
                        img: ["/products/p5/p5.1.webp",
                              "/products/p5/p5.2.webp",
                              "/products/p5/p5.3.webp",
                              "/products/p5/p5.4.webp",
                              "/products/p5/p5.5.webp"],
                        size : ["S","M","L"],
                        color: ["red","green","blue"],
                        type: "ladies",
                        reviews:[]  ,
                        createAt: new Date() 
                    });

    Products.insert({ name: "Arabella Textured Maxi Skirt",
                      price: 65.00,
                      quantity: 12 ,
                      img: [  "/products/p6/p6.1.webp",
                              "/products/p6/p6.2.webp",
                              "/products/p6/p6.3.webp",
                              "/products/p6/p6.4.webp",
                              "/products/p6/p6.5.webp"],
                      size : ["S","M","L"],
                      color: ["red","green","blue"],
                      type: "ladies",
                      reviews:[]  ,
                      createAt: new Date() 
                  });


                // db.products.insert({ name: "Arabella Textured Maxi Skirt",
                // price: 69.00,
                // quantity: 12 ,
                // img: {img1: '/products/p6.jpg',
                //       img2: '/products/p6.jpg'},
                // size : ["S","M","L"],
                // color: ["red","green","blue"],
                // type: "man",
                // quantity: 12,
                // reviews:[]  ,
                // createAt: new Date() 
                // });

  }
});
