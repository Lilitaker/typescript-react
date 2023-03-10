"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shopping_cart_1 = require("./lib/shopping-cart");
const calculate_total_amount_1 = require("./lib/calculate-total-amount");
const order_1 = require("./lib/order");
const cart = new shopping_cart_1.ShoppingCart();
console.log(`The cart's total is ${(0, calculate_total_amount_1.calculateTotalAmount)(cart)}`);
const order = new order_1.Order();
console.log(`The order's total is ${(0, calculate_total_amount_1.calculateTotalAmount)(order)}`);
