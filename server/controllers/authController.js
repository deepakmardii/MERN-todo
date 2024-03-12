const User = require('../models/User')

async function registerUser(req, res) {
  let { firstName, lastName, username, password } = req.body;
  // console.log(data);
  try {
    const duplicate = await User.find({ username })
    if (duplicate && duplicate.length > 0) {
      return res.status(400).send({ message: "User already registerd with this username" })
    }
    let user = new User({ firstName, lastName, username, password })
    const result = await user.save()
    console.log(result)
    res.status(201).send({ message: "User registered successfully" })
  } catch (err) {
    console.log(err)
    res.status(400).send(err)
  }
}

const AuthController = {
  registerUser
}

module.exports = AuthController;
