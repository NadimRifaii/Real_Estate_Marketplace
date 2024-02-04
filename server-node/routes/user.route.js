const express = require('express')
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, req.user.email + '-' + file.originalname)
  }
})
// const upload = multer({ dest: 'public/images' })//where we want to save the files
const upload = multer({ storage })//where we want to save the files
const { uploadPhoto } = require('../controllers/user.controller')
const userRouter = express.Router()
userRouter.post("/pictureURL", upload.single('file'), uploadPhoto)
module.exports = userRouter