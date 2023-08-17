const express = require("express");
const UserModel = require("../model/UserModel");
const jwt = require("jsonwebtoken");

JWT_KEY = "fsoc";

module.exports.postSignup = async function postSignup(req, res) {
  try {
    let userData = req.body;
    let user = await UserModel.create(userData);
    if (user) {
      res.json({
        message: "You are Sign In",
        data: user,
        status: "200",
      });
    } else {
      res.json({
        message: "You are not Sign In",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports.postLogin = async function postLogin(req, res) {
  try {
    const userData = req.body;
    if (userData.email) {
      let user = await UserModel.findOne({ email: userData.email });
      if (user) {
        if (user.password == userData.password) {
          let uid = user["_id"];
          let token = jwt.sign({ payload: uid }, JWT_KEY);
          res.cookie("isLoggedIn", token, { httpOnly: true });
          if (user.role == "Customer") {
            return res.status(200).send({
              message: "User Is Logged In",
              status: 0,
              data: user,
            });
          }
          if (user.role === "Banker") {
            return res.status(200).send({
              message: "User Is Logged In",
              status: 1,
              data: user,
            });
          }
        } else {
          res.send({
            message: "Wrong Credentials",
          });
        }
      } else {
        res.send({
          message: "User Not Found",
        });
      }
    } else {
      res.send({
        message: "Email field is empty",
      });
    }
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

module.exports.allCustomers = async function allCustomers(req, res) {
  try {
    let allUsers = await UserModel.find();
    res.status(200).send({
      message: "All Customers",
      data: allUsers,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

module.exports.particularCustomer = async function particularCustomer(
  req,
  res
) {
  try {
    let id = req.params.id;
    let allUsers = await UserModel.findById(id);
    res.status(200).send({
      message: "Particular Customer",
      data: allUsers,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

module.exports.deposit = async function deposit(req, res) {
  try {
    let id = req.params.id;
    let userAmount = req.body;
    console.log(userAmount);
    let allUsers = await UserModel.findById(id);
    allUsers.balance += userAmount.balance;
    allUsers.save();
    res.status(200).send({
      message: "Deposit Money",
      data: allUsers,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

module.exports.withdraw = async function withdraw(req, res) {
  try {
    let id = req.params.id;
    let userAmount = req.body;
    console.log(userAmount);
    let allUsers = await UserModel.findById(id);
    if (allUsers.balance >= userAmount.balance) {
      allUsers.balance -= userAmount.balance;
      allUsers.save();
      res.status(200).send({
        message: "Withdraw Money",
        data: allUsers,
      });
    } else {
      res.send({
        message: "Insufficient Balance",
      });
    }
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};
