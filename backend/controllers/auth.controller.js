const jwt = require('jsonwebtoken')

const signout = (req, res) => {
  res.clearCookie('token', {
    path: '/',
    httpOnly: true,
  })
  res.status(200).json({
    success: true,
    message: 'logout',
  })
}

const signin = (req, res) => {

    const isAuthenticated = req.body.username === process.env.USERNAME && req.body.password === process.env.PASSWORD
    if(isAuthenticated) {

        // user is "authenticated" create a jwt token now
        var token = jwt.sign(
            {
              username: req.body.username,
            },
            process.env.AUTH_SECRET_KEY,
            {
              expiresIn: '1d', // 24 hours
            }
        )

        res.cookie('token', token, {
            maxAge: 86400000,
            httpOnly: true,
        })

        res.status(200).json({
            success: true,
            data: {
                username: 'BookStore Operator'
            }
        })

    } else {
        return res.status(404).json({
          success: false,
          message: 'User Not found.',
        })
    }
}

module.exports = {
    signin,
    signout,
}