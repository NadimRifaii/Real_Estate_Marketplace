function handleErrors(error, res) {
  if (error.code === 11000) {
    const duplicateField = Object.keys(error.keyPattern)[0];
    return res.status(400).json({ "error": `${duplicateField} is already taken` });
  } else {
    const message = error.message
    return res.status(400).json({ "error": message });
  }
}

module.exports = {
  handleErrors,
};