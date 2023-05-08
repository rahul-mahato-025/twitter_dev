const express = require("express");
const connectDB = require("./config/database");
const tweet = require("./models/tweet");
const TweetService = require("./services/tweet-service");

const app = express();

app.listen(3000, async () => {
  await connectDB();
  const ser = new TweetService();
  // const tweet = await ser.create({
  //   content: "This is my tweet! #lol #FUN! #GO",
  // });
  // console.log(tweet);
  console.log(`Server started at port 3000`);
});
