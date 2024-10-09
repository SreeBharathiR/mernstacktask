const errorHandler = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    const error = Object.values(err.errors).map((el) => el.message);
    return res.status(400).json({
      message: "Failed",
      error,
    });
  }
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Failed",
      error: `Invalid ${err.path}:${err.value}`,
    });
  }
  if (err.code === 11000) {
    return res.status(400).json({
      message: "Failed",
      error: `${err.keyValue["email"]} already exists`,
    });
  }
  res.status(500).json({
    message: err.message,
  });
};
module.exports = errorHandler;
