async function uploadPhoto(req, res) {
  return res.status(200).json({ "body": req.file })
}
module.exports = {
  uploadPhoto
}