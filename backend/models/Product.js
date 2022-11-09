const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true},
        img: { type: String, required: true, unique: true },
        categories: { type: Array},
        size: { type: String },
        color: { type: String},
        price: { type: Number, required: true },
        postDate: {type: Date, default: Date.now()}
    },
    // { timeStamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);