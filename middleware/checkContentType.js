const checkContentType = (req, res, next) => {
  const contentType = req.headers["content-type"];
  console;
  if (contentType !== "application/json") {
    return res
      .status(400)
      .send(
        "Server requires application/json content type your conent-type is " +
          contentType
      );
  }
  // Attach some data to req object
  req.customData = { contentType };
  next();
};

module.exports = checkContentType;
