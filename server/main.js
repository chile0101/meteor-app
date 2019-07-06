import { Meteor } from 'meteor/meteor';
import { Products } from '../imports/api/products';


Meteor.startup(() => {
  if (Products.find().count() === 0) {
    Products.insert({   name: "Collete Stretch Linen Minidress",
                        price: 69.00,
                        quantity: 12 ,
                        img: ["./products/p1.jpg","./products/img1.webp"],
                        size : ["S","M","L"],
                        color: ["red","green","blue"],
                        type: "man",
                        quantity: 12,
                        reviews:[]  ,
                        createAt: new Date() 
                        });

    Products.insert({   name: "Button-Down Denim Mini Dress",
                        price: 69.00,
                        quantity: 12 ,
                        img: ["./products/p2.jpg","./products/img1.webp"],
                        size : ["S","M","L"],
                        color: ["red","green","blue"],
                        type: "man",
                        quantity: 12,
                        reviews:[]  ,
                        createAt: new Date() 
                    });

    Products.insert({   name: "Plunge V-neck Denim Mini Dress",
                        price: 69.00,
                        quantity: 12 ,
                        img: ["./products/p3.jpg","./products/img1.webp"],
                        size : ["S","M","L"],
                        color: ["red","green","blue"],
                        type: "man",
                        quantity: 12,
                        reviews:[]  ,
                        createAt: new Date() 
                    });
    Products.insert({   name: "Surplice Gingham Jumpsuit",
                        price: 69.00,
                        quantity: 12 ,
                        img: ["./products/p4.jpg","./products/img1.webp"],
                        size : ["S","M","L"],
                        color: ["red","green","blue"],
                        type: "man",
                        quantity: 12,
                        reviews:[]  ,
                        createAt: new Date() 
                    });
    Products.insert({   name: "Hermosa Ladder Lace Midi Dress",
                        price: 69.00,
                        quantity: 12 ,
                        img: ["./products/p5.jpg","./products/img1.webp"],
                        size : ["S","M","L"],
                        color: ["red","green","blue"],
                        type: "man",
                        quantity: 12,
                        reviews:[]  ,
                        createAt: new Date() 
                    });

    Products.insert({ name: "Arabella Textured Maxi Skirt",
                      price: 69.00,
                      quantity: 12 ,
                      img: ["./products/p6.jpg","./products/img1.webp"],
                      size : ["S","M","L"],
                      color: ["red","green","blue"],
                      type: "man",
                      quantity: 12,
                      reviews:[]  ,
                      createAt: new Date() 
                  });

  }
});




{/* <div class = "row">
    <div class="col-2"></div>
    <div class="col-10">

      products => foreach(p){
         <div class ="col"></div>
      }
      
    </div>
</div>  */}