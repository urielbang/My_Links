const { verifyToken } = require("../utils/jwt");

const auth = (req, res, next) => {
  try {
    const userToken = req.headers["authorization"];
    if (!userToken) return res.status(401).send("unAuthorization");
    const token = userToken.split(" ")[1];
    const payload = verifyToken(token);
    if (!payload) return res.status(401).send("unAuthorization");
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).send("unAuthorization");
  }
};

module.exports = { auth };
