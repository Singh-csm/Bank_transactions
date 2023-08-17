const express = require("express");
const userRoutes = express.Router();

const {
  postSignup,
  postLogin,
  allCustomers,
  particularCustomer,
  deposit,
  withdraw,
} = require("../controller/userController");

userRoutes.route("/signup").post(postSignup);

userRoutes.route("/login").post(postLogin);

userRoutes.route("/allCustomers").get(allCustomers);

userRoutes.route("/particularCustomer/:id").get(particularCustomer);

userRoutes.route("/deposit/:id").post(deposit);

userRoutes.route("/withdraw/:id").post(withdraw);

module.exports = userRoutes;
