const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { csrfMiddleware } = require('./middlewares/csrfMiddleware')
const dotenv = require("dotenv")
dotenv.config()

if (['production', 'development'].indexOf(process.env.NODE_ENV) === -1) {
  console.error('process.env.NODE_ENV is not set to production or development')
  process.exit()
}
const logRequestStart = (req, res, next) => {
  console.info(`${req.method} ${req.originalUrl}`)
  next()
}

const app = express()

var corsWhitelist = [
  process.env.APP_BASE_URL,
  ...(process.env.NODE_ENV === 'development' ? ['http://localhost:8080'] : []),
]

app.use(
  cors({
    origin: (origin, callback) => {
      if (corsWhitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials: true,
  })
)

app.use((req, res, next) => {
    bodyParser.json({ limit: '10mb' })(req, res, next)
})

// parse cookie headers to securely manage tokens
app.use(cookieParser())
// CSRF
app.use(csrfMiddleware)
app.use(logRequestStart)

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// routes
require('./routes/auth.route')(app)
require('./routes/bookstore.route')(app)

app.listen(3000, '0.0.0.0', () => {
    console.log(`Server is running on port ${3000}.`)
})