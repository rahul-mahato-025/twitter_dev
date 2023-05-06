const express = require("express");
const connectDB = require("./config/database");
const tweet = require("./models/tweet");

const app = express();

app.listen(3000, async () => {
  await connectDB();
  console.log(`Server started at port 3000`);
});
