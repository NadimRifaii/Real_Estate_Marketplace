const express = require("express")
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')
app.use(cors())
/** Routers */
const authRouter = require('./routes/auth.route')
dotenv.config()
app.use(express.json())
app.use('/auth', authRouter)
module.exports = app 