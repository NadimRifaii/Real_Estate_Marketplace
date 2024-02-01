const UserModel = require('../models/user.model')
const errorHandler = require('../utils/error')
const bcryptjs = require('bcryptjs')
async function signUp(req, res, next) {
  const { username, email, password } = req.body
  if (!username || !email || !password) {
    return res.status(400).json({ "message": "Invalid credentials" })
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new UserModel({ username, email, password: hashedPassword })
  try {
    const result = await newUser.save()
    return res.status(201).json({ "message": "User created successfully", result })//201 => something got created
  } catch (error) {
    // next(errorHandler(500, 'Error:Invalid credentials'))
    next(error)
  }
}
async function signIn(req, res) {

}
module.exports = {
  signUp,
  signIn
}