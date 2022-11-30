// const mongoose = require("mongoose");

// mongoose.connect('mongodb://localhost:27017/restapi')
// .then(console.log("login Successful"))
// .catch(console.error);

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL, {}).then(() => {
  console.log("CONNECTED TO DATABASE");
});
