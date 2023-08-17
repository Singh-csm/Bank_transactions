const AccountModel = require("../model/AccountModel");
const UserModel = require("../model/UserModel");

module.exports.transferAmount = async function transferAmount(req, res) {
  try {
    const { id, sName, sEmail, rName, rEmail, amount } = req.body;
    const transferData = await AccountModel.create({
      sName: sName,
      sEmail: sEmail,
      rName: rName,
      rEmail: rEmail,
      amount: amount,
    });
    const userData = await UserModel.findById(id);
    userData.transferData.push(transferData);
    userData.save();

    res.status(200).send({
      message: "Transfer Amount Successfully---!",
      data: userData,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

module.exports.transferHistory = async function transferHistory(req, res) {
  try {
    const id = req.params.id;
    const customerHistory = await UserModel.findById(id);

    res.status(200).send({
      message: "Transfer Amount Successfully---!",
      data: customerHistory,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};
