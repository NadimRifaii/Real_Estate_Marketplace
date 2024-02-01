const app = require('./app.js')
const http = require('http')
const httpServer = http.createServer(app)
const PORT = process.env.PORT || 5000
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})