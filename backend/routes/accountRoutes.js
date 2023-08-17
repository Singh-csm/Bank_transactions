const express = require("express");
const accountRoutes = express.Router();

const {
  transferAmount,
  transferHistory,
} = require("../controller/accountController");

accountRoutes.route("/transferAmount").post(transferAmount);

accountRoutes.route("/transferHistory/:id").get(transferHistory);

module.exports = accountRoutes;
