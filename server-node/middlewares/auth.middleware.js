const jwt = require('jsonwebtoken')
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]
  // const decodedToken = jwt.decode(token, process.env.SECRET)
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    req.user = decodedToken
    next()
  } catch (error) {
    return res.status(401).json({ "error": "Invalid token" })
  }
}
module.exports = authMiddleware