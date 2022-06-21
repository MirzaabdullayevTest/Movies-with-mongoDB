const express = require('express')
const router = express.Router()
const Movie = require('../model/Movie')

// Get request to all movies
router.get('/:gt/:lt', async (req, res) => {
    // /api/movies/year?2009
    // /api/movies/:year
    const movies = await Movie.find({ year: { $nin:[1997, 2020] } }) // $eq = equal teng
        .limit(3)
    // .sort({ imdb: -1 })

    if (movies.length === 0) {
        res.send('Movies are empty')
        return
    }

    res.status(200).send(movies)
})

// Post request to create movie
router.post('/create', async (req, res) => {
    const { title,
        type,
        author,
        year,
        img,
        imdb } = req.body

    const movie = new Movie({
        title,
        type,
        author,
        year,
        img,
        imdb
    })

    await movie.save()
    res.status(201).send('Movie created')
})

module.exports = router