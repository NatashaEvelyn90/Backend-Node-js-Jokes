const express = require('express')
const router = express.Router()
const axios = require('axios')
const getJoke = require('../helpers/getJoke')

//!HOMEPAGE http://localhost:3001 => home page
router.get('/', (req, res) => {
    // res.send('working...') => dispaly home page
    const url = 'https://api.sampleapis.com/jokes/goodJokes'

    axios.get(url)
        .then(resp => {
            // console.log(resp.data)

            //! moving to helper!
            // const randomJoke = resp.data[Math.floor(Math.random() * resp.data.length)]

            res.render('pages/home', {
                title: "Crazpicc's Funny Jokes",
                name: "crazpicc's jokes app!",
                joke: getJoke(resp.data)
            })
        })
    })
    

router.use('/jokes', require('./api/jokesRoutes'))

//? error handling (* means anything that isnt in the path would return an error)
//! Needs to go a the bottom of the page 
router.use((req, res, next)=> {
    res.status(404)
    .render('pages/404', {
        title: '404 ERROR',
        name: '404 ERROR. THAT PAGE DOES NOT EXIST'
    })
})

module.exports = router