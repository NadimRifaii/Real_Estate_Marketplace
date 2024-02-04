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
const upload = multer({ storage })
const { uploadPhoto, updateProfile } = require('../controllers/user.controller')
const userRouter = express.Router()
userRouter.put("/pictureURL", upload.single('file'), uploadPhoto)
userRouter.put("/profile", updateProfile)
module.exports = userRouter