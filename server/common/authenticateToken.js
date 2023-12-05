const jwt = require("jsonwebtoken");
const User = require("../models/User");

async function authenticateToken(req, res, next) {
  const token = req.headers["token"];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) return res.sendStatus(403);

    try {
      const foundUser = await User.findById(user.id);
      if (!foundUser || foundUser.role !== "Admin") {
        return res.sendStatus(403); // Forbidden access
      }
      req.user = foundUser;
      next();
    } catch (error) {
      console.error("Error in authenticateToken", error);
      res.sendStatus(500);
    }
  });
}

module.exports = authenticateToken;
