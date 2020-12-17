const jwt = require('jsonwebtoken')

const getTokenFromHeaders = (req) => {
  let token = null
  if (req.cookies && req.cookies.token) {
    token = req.cookies.token
  } else if (req.headers.authorization) {
    const cookie = req.headers.authorization
    if (cookie.startsWith('token=')) {
      token = cookie.slice(6, cookie.length)
    }
    if (cookie.startsWith('Bearer ')) {
      token = cookie.slice(7, cookie.length)
    }
  }

  return token
}

const verifyToken = async (req, res, next) => {
  let token = getTokenFromHeaders(req)

  if (token) {
    try {
      req.token = token
      req.jwtDecoded = jwt.verify(token, process.env.AUTH_SECRET_KEY)

      req.username = req.jwtDecoded.username

      next()
    } catch (error) {
      res.clearCookie('token', {
        path: '/',
        httpOnly: true,
      })
      return res.status(401).json({
        error: 'Invalid token',
      })
    }
  } else
    return res.status(401).json({
      error: 'Invalid token',
    })
}

const authJwt = {
  verifyToken: verifyToken,
}
module.exports = authJwt
