// connect to mongo database ->

const mongoose = require("mongoose");

// connection url syntax : mongodb://localhost/<database_name>
const connect = async () => {
  await mongoose.connect("mongodb://localhost/twitter_dev");
};

module.exports = connect;
