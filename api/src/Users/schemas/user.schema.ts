import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  genre: String,
  street: String,
  city: String,
  state: String,
  phone: String,
  birthday: String,
  payment: Boolean,
  created_at: { type: Date, default: Date.now }
})