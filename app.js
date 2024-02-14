const express = require("express");
const userRoute = require("./routes/user.routes");
const linkRoute = require("./routes/links.routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//! Routes
app.use("/api/v1/users", userRoute);
app.use("/api/v1/links", linkRoute);

module.exports = { app };
