const express = require('express')
const authRouter = express.Router()
const { signUp, signIn } = require('../controllers/auth.controller')

authRouter.post("/signup", signUp)

module.exports = authRouter