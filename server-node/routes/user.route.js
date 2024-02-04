const express = require('express')
const userRouter = express.Router()
userRouter.put("/pictureURL", async (req, res) => {
  return res.status(200).json({ "test": "testing", "currentUser": req.user })
})
module.exports = userRouter