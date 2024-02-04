const express = require("express")
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.static("public"))
/** Routers */
const authRouter = require('./routes/auth.route')
const userRouter = require('./routes/user.route')
/**middlewares */
const authMiddleware = require('./middlewares/auth.middleware')
dotenv.config()
app.use(express.json())
app.use('/auth', authRouter)
app.use('/user', authMiddleware, userRouter)
module.exports = app 