const UserModel = require("../models/user.model")
const { handleErrors } = require("../utils/error")

async function uploadPhoto(req, res) {
  return res.status(200).json({ "body": req.file })
}
async function updateProfile(req, res) {
  const { photoURL, username } = req.body
  if (!username)
    return res.status(400).json({ "error": "You can't remove your username" })
  const currentUser = req.user
  try {
    const result = await UserModel.updateOne({ email: currentUser.email }, { photoURL, username })
    return res.status(200).json({ "message": "User was updated successfully" })
  } catch (error) {
    return handleErrors(error, res)
  }
}
module.exports = {
  uploadPhoto,
  updateProfile
}