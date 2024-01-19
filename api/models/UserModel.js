const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },


  email: {
    type: String,
    required: true,
    unique: true
  },
  gender: {
    type: String
  },
  selectedOptions :{
    type: [String],
    required: true
  },
  city:{
    type: String
  },
  state:{
    type: String
  },

});


const User = mongoose.model("User",userSchema);

module.exports = User;
