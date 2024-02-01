const app = require('./app.js')
const http = require('http')
const httpServer = http.createServer(app)
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
async function startServer() {
  mongoose.connection.once("open", () => {
    console.log("mongo is ready")
  })
  mongoose.connection.once("error", () => {
    console.log("unable to connect")
  })
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
  }
  httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}
startServer()