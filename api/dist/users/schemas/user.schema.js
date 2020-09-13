"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
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
});
//# sourceMappingURL=user.schema.js.map