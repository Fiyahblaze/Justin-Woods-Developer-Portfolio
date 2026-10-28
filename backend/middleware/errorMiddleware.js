const notFound = (req, res, next) => {
  res.status(404);
  next(new Error("Route not found"));
};

const errorHandler = (err, req, res, next) => {
  const statusCode =
    err.status || (res.statusCode >= 400 ? res.statusCode : 500);

  res.status(statusCode).json({
    message: statusCode === 500 ? "Internal server error" : err.message,
  });
};

module.exports = { notFound, errorHandler };