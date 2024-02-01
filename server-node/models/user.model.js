const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 4
  },
  profilePicture: {
    type: String
  }
  ,
  email: {
    type: String,
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