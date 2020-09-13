import * as mongoose from 'mongoose'

export const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  imageUrl: String,
  amount: Number,
  barCode: Number,
  created_at: { type: Date, default: Date.now }
})