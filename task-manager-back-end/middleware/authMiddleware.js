const jwt = require("jsonwebtoken");
exports.protect = async (req, res, next) => {
  let token;
  if (req.cookies.jwt) {
    token = req.cookies.jwt;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
      req.user = decoded;
      next();
    } catch (e) {
      next(e);
    }
  }
  if (!token) {
    res.status(401).json({
      message: "Need to login",
    });
  }
};

exports.authorization = (...role) => {
  return (req, res, next) => {
    if (!role.includes(req.user.role)) {
      res.status(403).json({
        message: "You don't have access for this end point",
      });
    }
    next();
  };
};
