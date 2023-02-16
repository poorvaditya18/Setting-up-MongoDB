const express = require("express");

const connect = require("./config/database");

// importing Tweet model
// const Tweet = require("./models/tweet");

const TweetRepository = require("./repository/tweet-repository");
const Comment = require("./models/comment");

const app = express();

app.listen(3000, async () => {
  console.log("server started  ");
  await connect();
  console.log("Mongo db connected");

  //  Document in Mongodb is treated as Row -->
  //  Document will be created for Tweet Model
  //   const tweet = await Tweet.create({
  //     content: "THIRD TWEET",
  //     userEmail: "ab@c.com",
  //   });

  //  Querying database using mongoose
  //   This will return array -->
  //   const tweets = await Tweet.find({ userEmail: "ab@c.com" });
  //   const tweets = await Tweet.findById("63e76865ff69f3bb000a2cd8"); //--> findById
  //   tweets.userEmail = "pq@r.com";
  //   tweets.save();
  //   console.log(tweets);

  const tweetRepo = new TweetRepository();
  //   const tweet = await tweetRepo.update("63e76865ff69f3bb000a2cd8", {
  //     content: "tweet with a comment",
  //   });
  //   console.log(tweet);
  //   tweet.comments.push({ content: "Hello comment!" });
  //   await tweet.save();
  //   console.log(tweet);

  //   const tweet = await tweetRepo.create({
  //     content: "Tweet with comment Schema",
  //   });
  //   const comment = await Comment.create({ content: "Hello Dear!" });
  //   tweet.comments.push(comment);
  //   await tweet.save();
  //   console.log(tweet);

  // const tweet = await tweetRepo.getAll(2, 4);
  // console.log(tweet[0].id); //So here id property doesn't exists but still we are able to fetch due to --> virtual Properties
  // console.log(tweet[0].connectWithEmail); //virtual property

  //example for hooks ->
  // suppose we are creating new tweet
  const tweet = await tweetRepo.create({
    content: "Tweet with a new hook",
    userEmail: "abz@c.com",
    comment: "Illustration with hooks",
  });
  console.log(tweet);
});
