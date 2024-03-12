const express = require("express");
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
require('dotenv').config()

const PORT = process.env.PORT || 5000

app.use(cors())

mongoose.connect(process.env.DB_URL).then((res) => {
  console.log("DB connected successfully")
}).catch(err => {
  console.log(err)
})

app.listen(PORT, () => {
  console.log(`listening on PORT:${PORT}`)
})
