export async function test(req, res) {
  return res.status(200).json({ "message": "Hello" })
}