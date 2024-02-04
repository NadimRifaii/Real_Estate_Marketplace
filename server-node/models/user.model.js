// const mongoose = require('mongoose')
// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//     minLength: 4
//   },
//   email: {
//     type: String,
//     unique: true,
//     required: true,
//     validate: {
//       validator: (value) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value),
//       message: 'Invalid email format',
//     },
//   },
//   password: {
//     type: String,
//     required: true
//   }
// }, {
//   timestamps: true
// }
// )
// const UserModel = mongoose.model("User", userSchema)
// module.exports = UserModel 
const mongoose = require('mongoose')
const bcryptjs = require("bcryptjs")
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, 'This username is taken'],
    required: [true, 'Username is required']
  },
  email: {
    type: String,
    unique: [true, 'Email is taken'],
    required: [true, "Email is required"],
    validate: {
      validator: (value) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value),
      message: "Invalid email"
    }
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (value) => value.length > 6,
      message: "Short password"
    }
  },
  photoURL: {
    type: String,
    default: `https://th.bing.com/th/id/OIP.8DDnZg9-q5BkyTcfOAYsbwHaGA?rs=1&pid=ImgDetMain`
  }
}, {
  timestamps: true
})
userSchema.pre("save", function (next) {
  const hashedPassword = bcryptjs.hashSync(this.password, 10)
  this.password = hashedPassword
  next()
})
const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel