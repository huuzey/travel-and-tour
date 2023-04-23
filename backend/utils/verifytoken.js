const jwt = require("jsonwebtoken");

const verifytoken = (req, res, next) => {
  const token = req.query.accesstoken;
  if (!token) {
    return res.status(401).json("you are not signed in");
  }
  jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
    if (error) {
      return res.status(401).json("invalid token");
    }
    req.user = user;
    next();
  });
};

const verifyuser = (req, res, next) => {
  verifytoken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.role === "admin") {
      console.log("token is verified");
      next();
    } else {
      console.log("token is not verified");
      return res.status(401).json("You are not authenticated");
    }
  });
};
const verifyadmin = (req, res, next) => {
  verifytoken(req, res, next, () => {
    if (req.user.role === "admin") {
      console.log("admin verify is thier");
      next();
    } else {
      return res.status(401).json("You are not an admin");
    }
  });
};
module.exports = { verifyuser, verifyadmin };
