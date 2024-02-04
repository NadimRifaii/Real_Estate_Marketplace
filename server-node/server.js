const http = require('http')
const app = require('./app')
const httpServer = http.createServer(app)
const mongoose = require("mongoose")
async function connectToMongo() {
  const MONGO_URL = process.env.MONGO_URL
  mongoose.connection.once("open", () => {
    console.log("Connection with mongodb opened")
  })
  mongoose.connection.once("error", (err) => {
    console.log(err)
  })
  try {
    await mongoose.connect(MONGO_URL)
    console.log("Connected to mongodb")
  } catch (error) {
    console.log(error)
  }
}
async function startServer() {
  await connectToMongo()
  const PORT = process.env.PORT
  httpServer.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
  })
}
startServer()