const errorController = (req, res) => {
  return res.status(404).json({
    message: `${req.url} page not found`,
  });
};
module.exports = errorController;
