const { off } = require("../models/tweet");
const Tweet = require("../models/tweet");

class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  async get(tweetId) {
    try {
      const tweet = Tweet.findById(tweetId);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getWithComments(tweetId) {
    try {
      // along with the tweet do also populate the comment. So, comment attached will also get displayed with the tweet.
      // populate --> works for association .
      const tweet = Tweet.findById(tweetId)
        .populate({ path: "comments" })
        .lean();
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async update(tweetId, data) {
    try {
      // findByIdAndUpdate -> this updates the document in the db but returns the old document. how can we get the latest data ?
      // findByIdAndUpdate(id,update,{new:true})--> now this will always return the updated content.
      const tweet = Tweet.findByIdAndUpdate(tweetId, data, { new: true });
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async destroy(tweetId) {
    try {
      const tweet = await Tweet.findByIdAndRemove(tweetId);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  // PAGINATION Example ->
  //getAll based on some offset
  async getAll(offset, limit) {
    try {
      // skip(offset) - skipped the first two tweet
      // limit(limit)
      const tweet = await Tweet.find().skip(offset).limit(limit);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TweetRepository;
