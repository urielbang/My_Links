const express = require("express");
const userRoute = require("./routes/user.routes");
const linkRoute = require("./routes/links.routes");

const app = express();

app.use(express.json());

//! usses
app.use("/api/v1/users", userRoute);
app.use("/api/v1/links", linkRoute);
module.exports = { app };
