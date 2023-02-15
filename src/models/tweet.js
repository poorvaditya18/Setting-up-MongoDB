const mongoose = require("mongoose");

// In SQL databases -> userEmail will be stored as a column .
// so we can fetch the null entries .

// But in No SQL database -> here there is no need to store null values. So userEmail will not get store. no need to store the null values.

// {timestamp:true} --> will ensure properties createdAt and updatedAt
const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
    },
    // Associating comments model with Tweet
    comments: [
      {
        // This will store the commentId which will refer to the comment collection
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

// Schema is just the blueprint how model will look like.
// Model is actual model implementation that will fetch/connect to the database. 

// After creating schema then create model . so our Tweet model will follow tweetSchema
// It will automatically pluralize the model name
const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
