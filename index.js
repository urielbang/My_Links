const { app } = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/my_links")
  .then((res) => {
    console.log("cooneted to db");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log("listening to port " + PORT);
});
