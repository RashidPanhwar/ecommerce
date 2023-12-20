const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String, required: [true, "Please Enter Product Name"]
    },
    description: {
        type: String, required: [true, "Please Enter Product Description"]
    },
    category: {
        type: String, required: [true, "Please Enter Product Category"]
    },
    tag: { type: String },
    originalPrice: {
        type: Number, required: [true, "Please Enter Product Price"]
    },
    discountPrice: {
        type: Number
    },
    stock: {
        type: Number, required: [true, "Please Enter Product Stock"]
    },
    image: [
        {
            public_id : {
                type: String, required: [true]
            },
            uli : {
                type: String, required: true
            }
        }
    ],
    reviews: [
        {
            name:{type: Object},
            comment: {type: String},
            productId: {type: String},
            createdAt:{type: Date, default: Date.now()},
        }
    ],
    rating: {type: Number},
    shopId: {type: String, required: true},
    shop: {type: Object, required: true},
    soldOut: {type: Number, default: 0},
    createdAt: {type: Date, default: Date.now()}

});

module.exports = mongoose.model("Product", productSchema);