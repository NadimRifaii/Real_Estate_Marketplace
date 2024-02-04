const express = require('express')
const authRouter = express.Router()
/** controllers */
const { signup, login, google } = require('../controllers/auth.controller')
authRouter.post("/signup", signup)
authRouter.post("/login", login)
authRouter.post("/google", google)
module.exports = authRouter 