const mongoose = require("mongoose");
const emailValidator = require("email-validator");

URL = "mongodb+srv://singh-csm:GIUPM5681K@singh-csm.nmfw5jk.mongodb.net/testbanking";
mongoose
  .connect(URL)
  .then(function (e) {
    console.log("Database connected Successfully---!");
  })
  .catch(function (err) {
    console.log(err);
  });

const UserScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: function () {
      return emailValidator.validate(this.email);
    },
  },
  contact: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  role: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    default: 0000,
  },
  transferData: [],
});

const UserModel = new mongoose.model("User", UserScheme);
module.exports = UserModel;
