exports.CreateProduct = async (req, res, next) => {
  try {
    next();
  } catch (error) {
    res.status(400).json(error);
  }
};
