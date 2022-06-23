const express = require('express')
const router = express.Router()
const Movie = require('../model/Movie')

// Get request to all movies

/* 
auth
token
bcrypt
multer
*/

router.get('/', async (req, res) => {
    // /api/movies/year?2009
    // /api/movies/:year
    const countNumber = +req.query.count
    const pageNumber = +req.query.page

    const movies = await Movie.find()
        .sort({ imdb: -1, _id: 1 })
        .skip((pageNumber - 1) * countNumber)
        .limit(countNumber)
        .select({ title: 1, author: 1, _id: 0, imdb: 1 })

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
        imdb,
        isPublished } = req.body

    const movie = new Movie({
        title,
        type,
        author,
        year,
        img,
        imdb,
        isPublished
    })

    try {
        await movie.save()
    } catch (error) {
        res.status(404).send(error.message)
        return
    }
    res.status(201).send('Movie created')
})

module.exports = router