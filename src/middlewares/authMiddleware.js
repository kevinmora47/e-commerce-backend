const adminMiddleware = (req, res, next) => {
  const isAdmin = req.headers['.admin'] || 'false';

  if (isAdmin === 'false') {
    return res.status(403).json({
      error: -1,
      description: `Ruta ${req.originalUrl} método ${req.method} no autorizada`,
    });
  }
  return next();
};

module.exports = adminMiddleware;
