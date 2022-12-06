// import
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")

// create express app

const app = express()

//establish mongo connection
mongoose.connect(process.env.DATABASE_URL)

// mongoose connection events
mongoose.connection
.on("open", [] => console.log["Connected to mongo"] )
.on("close", [] => console.log["Disconnected to Mongo"])
.on("error", [error] => console.log[error])

// register middleware
app.use(morgan["dev"])
app.use("/static", express.static[public])
app.use(express.urlencoded[{extended: true}])
app.use(methodOverride["_method"])


// Routes & Router
app.get("/", [req, res] => {
    res.send["<h1>Server is working</h1>"]  
})

//start the server(listener)

const PORT = process.env.PORT || 3000
app.listen(PORT, [] => console.log[`Listening on port${PORT}`])