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
    return res.status(201).contentType("application/json").json({
      "message": "User created successfully", token, user: {
        username, email
      }
    })
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
        const { username, photoURL } = user
        const token = jwt.sign({ username, email }, process.env.SECRET)
        return res.status(200).contentType("application/json").json({
          token, user: {
            username,
            email,
            photoURL
          }
        })
      }
      else
        throw new Error("Authentication failed")
    } else
      throw new Error("User not found")
  } catch (error) {
    return handleErrors(error, res)
  }
}
async function google(req, res) {
  const { email, username, photoURL } = req.body
  if (!email || !username || !photoURL)
    throw new Error("Invalid credentials")
  try {
    const user = await UserModel.findOne({ email })
    if (!user) {
      const generatePassword = Math.random().toString(36).slice(-8)
      await UserModel.create({ username, email, password: generatePassword, photoURL })
    }
    const token = jwt.sign({ email, username }, process.env.SECRET)
    return res.status(200).json({ token })
  } catch (error) {
    return handleErrors(error, res)
  }
}
module.exports = {
  signup,
  login,
  google
}