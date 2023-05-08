const express = require("express");
const connectDB = require("./config/database");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

app.listen(3000, async () => {
  await connectDB();
  console.log(`Server started at port 3000`);
});
