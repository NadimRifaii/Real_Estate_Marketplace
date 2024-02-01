const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const userRouter = require('./routes/user.route')
dotenv.config()
const app = express()
app.use(cors())
app.get("/healthy", (req, res) => {
  res.status(200).send("Server is healthy")
})
app.use('/api/user', userRouter)
module.exports = app