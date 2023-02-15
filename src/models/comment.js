const mongoose = require("mongoose");

// In SQL databases -> userEmail will be stored as a column .
// so we can fetch the null entries .

// But in No SQL database -> here there is no need to store null values. So userEmail will not get store. no need to store the null values.

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
    },
  },
  { timestamps: true }
);

// after creating schema then create model . so our Tweet model will follow tweetSchema
// it will automatically pluralize the model name
const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
