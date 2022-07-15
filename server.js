module.exports = (req, res, next) => {
  if (req.url == "/products" && req.method == "GET"){
    res.statusCode = 401;
    res.end();
    return;
  }
}
