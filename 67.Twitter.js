// https://neetcode.io/problems/design-twitter-feed

class Twitter {
  constructor() {
    this.time = 0;

    // userId -> tweets
    // each tweet = { tweetId, time }
    this.tweets = {};

    // userId -> set of followees
    this.following = {};
  }

  postTweet(userId, tweetId) {
    if (!this.tweets[userId]) {
      this.tweets[userId] = [];
    }

    this.tweets[userId].push({
      tweetId,
      time: this.time++,
    });
  }

  getNewsFeed(userId) {
    let res = [];

    let maxHeap = new MaxPriorityQueue((x) => x.time);

    // user should see own tweets too
    let followees = new Set(this.following[userId] || []);
    followees.add(userId);

    // add latest tweet of each followee
    for (let followeeId of followees) {
      let tweets = this.tweets[followeeId];

      if (!tweets || tweets.length === 0) continue;

      let lastIdx = tweets.length - 1;

      let tweet = tweets[lastIdx];

      maxHeap.enqueue({
        tweetId: tweet.tweetId,
        time: tweet.time,
        followeeId,
        idx: lastIdx - 1,
      });
    }

    // get 10 most recent tweets
    while (!maxHeap.isEmpty() && res.length < 10) {
      let curr = maxHeap.dequeue();

      res.push(curr.tweetId);

      // add older tweet from same user
      if (curr.idx >= 0) {
        let nextTweet = this.tweets[curr.followeeId][curr.idx];

        maxHeap.enqueue({
          tweetId: nextTweet.tweetId,
          time: nextTweet.time,
          followeeId: curr.followeeId,
          idx: curr.idx - 1,
        });
      }
    }

    return res;
  }

  follow(followerId, followeeId) {
    if (!this.following[followerId]) {
      this.following[followerId] = new Set();
    }

    this.following[followerId].add(followeeId);
  }

  unfollow(followerId, followeeId) {
    if (!this.following[followerId]) return;

    this.following[followerId].delete(followeeId);
  }
}
