const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const app = express()
app.use(cors())
app.get("/healthy", (req, res) => {
  res.status(200).send("Server is healthy")
})
module.exports = app