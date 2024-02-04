const UserModel = require('../models/user.model')
const { handleErrors } = require('../utils/error')
const jwt = require("jsonwebtoken")
const bcryptjs = require('bcryptjs')
async function signup(req, res) {
  const { email, username, password } = req.body
  if (!email || !password || !username) {
    return res.status(400).json({ "error": "Invalid credentials" })
  }
  try {
    const result = await UserModel.create({ username, email, password })
    const token = jwt.sign({ username, email }, process.env.SECRET)
    return res.status(201).contentType("application/json").json({ "message": "User created successfully", token })
  } catch (error) {
    return handleErrors(error, res)
  }
}
async function login(req, res) {
  const { email, password } = req.body
  if (!email || !password)
    return res.status(400).json({ "error": "Invalid credentials" })
  try {
    const user = await UserModel.findOne({ email })
    if (user) {
      if (bcryptjs.compareSync(password, user.password)) {
        const { username } = user
        const token = jwt.sign({ username, email }, process.env.SECRET)
        return res.status(200).contentType("application/json").json({ token })
      }
      else
        throw new Error("Authentication failed")
    } else
      throw new Error("User not found")

  } catch (error) {
    return handleErrors(error, res)
  }
}
module.exports = {
  signup,
  login
}