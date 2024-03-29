require("dotenv").config()
require("express-async-errors")

const accessLogMiddleware = require("./middlewares/logger.middleware")
const routes = require("./routes/api")

const express = require("express")
const fileUpload = require('express-fileupload')
const app = express()
const cors = require("cors")

app.use(cors())

app.use(express.json())

app.use(fileUpload());

// Req and Res logger.
app.use(accessLogMiddleware)

app.use("/", routes)

module.exports = app
