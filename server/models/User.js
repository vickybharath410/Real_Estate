// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     email: {type: String, unique : true},
//     password: {type: String}
// },{timestamps:true});

// const userModel = mongoose.model("User", userSchema);
// module.exports = userModel;

// let value = 1200;
const mongoose = require("mongoose");
Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;
const userSchema = new mongoose.Schema({
  userid: {
    type: String,
    unique: true
  },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});
module.exports = mongoose.model("User", userSchema);