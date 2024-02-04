const express = require('express')
const { uploadPhoto } = require('../controllers/user.controller')
const userRouter = express.Router()
userRouter.put("/pictureURL", uploadPhoto)
module.exports = userRouter