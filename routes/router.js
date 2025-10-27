const express = require('express')
const router = express.Router()

//!HOMEPAGE http://localhost:3001 
router.get('/', (req, res) => {
    res.send('working...')
})

router.use('/jokes', require('./api/jokesRoutes'))

//? error handling (* means anything that isnt in the path would return an error)
//! Needs to go a the bottom of the page 
router.use((req, res, next)=> {
    res.status(404).send("404 Error. This page does not exist!")
})

module.exports = router