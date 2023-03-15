const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const validateEmail = function(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const validateDate = function(date){
  const re = /^(0?[1-9]|[12][0-9]|3[01])[\-](0?[1-9]|1[012])[\-]\d{4}$/;
  return re.test(date)
}
const UserSchema = new Schema({
  name: { type: String, required: [true, "Name field is required"] },
  age: { type: Number, required: [true, "Enter age to continue"], min: [19, "Only 18+ allowed"] },
  email: { type: String, required: [true, "Email field is required"], validate: [validateEmail, "Enter valid email"]},
  gender: { type: String },
  mob: { type: Number, required: [true, "Enter phone no to continue"], min:1000000000, max: 9999999999 },
  birthday: { type: String, required: [true, "Name field is required"], validate: [validateDate, "Enter a valid date in the dd-mm-yyyy format"] },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  address1: { type: String },
  address2: {type: String},
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
