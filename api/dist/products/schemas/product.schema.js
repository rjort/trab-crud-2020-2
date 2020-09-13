"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose = require("mongoose");
exports.ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: String,
    price: Number,
    imageUrl: String,
    amount: Number,
    barCode: Number,
    created_at: { type: Date, default: Date.now }
});
//# sourceMappingURL=product.schema.js.map