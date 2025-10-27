//TODO Step 1: Import Express and create the port 
const express = require('express')
const server = express()
//! importing the router file 
const router = require('./routes/router')
const PORT = process.env.PORT || 3001


server.use('/', router)
//! This here is what we are using as the view engine. It is ejs 
server.set('view engine', 'ejs')

//TODO Step 2: listen to see if the port is working
server.listen(PORT, () => console.log(`Server is listening at http://localhost:${PORT}`))