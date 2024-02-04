const express = require("express")
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.static("public"))
/** Routers */
const authRouter = require('./routes/auth.route')
dotenv.config()
app.use(express.json())
app.use('/auth', authRouter)
module.exports = app 