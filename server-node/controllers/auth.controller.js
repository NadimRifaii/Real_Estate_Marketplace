const UserModel = require('../models/user.model')
const errorHandler = require('../utils/error')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
    next(error)
  }
}
async function signIn(req, res, next) {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ 'message': "Invalid credentials" })
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  try {
    const user = await UserModel.findOne({ email })
    if (!user) {
      return next(errorHandler(404, "User not found"))
    }
    const validPassword = bcryptjs.compareSync(password, user.password)
    if (!validPassword) {
      return next(errorHandler(404, "Wrong credentials"))
    }
    const token = jwt.sign({ id: user._id }, 'secret')
    // res.cookie('acess_token', token, { httpOnly: true })//no other 3rd parties app have access to our cookie
    return res.cookie('acess_token', token, { httpOnly: true }).status(200).json({
      user: {
        username: user.username
      }
    })
  } catch (error) {
    next(error)
  }
}
module.exports = {
  signUp,
  signIn
}