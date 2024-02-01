const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 4
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (value) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value),
      message: 'Invalid email format',
    },
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
}
)
const UserModel = mongoose.model("User", userSchema)
module.exports = UserModel