const UserModel = require('../models/user.model')
const bcryptjs = require('bcryptjs')
async function signUp(req, res, next) {
  const { username, email, password } = req.body
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new UserModel({ username, email, password: hashedPassword })
  try {
    const result = await newUser.save()
    return res.status(201).json({ "message": "User created successfully", result })//201 => something got created
  } catch (error) {
    next(error)
  }
}
async function signIn(req, res) {

}
module.exports = {
  signUp,
  signIn
}