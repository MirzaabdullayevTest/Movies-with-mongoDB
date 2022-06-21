const express = require('express')
const app = express()

// Connect mongoDB
require('./helper/db')()

// Require routes
const movieRouter = require('./router/movie')

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// RESTful api // movies
// Routing
app.use('/api/movies', movieRouter)

const port = normalizePort(process.env.port || 5000)
const host = 'localhost'
try {
    app.listen(port, host, () => {
        console.log(`Server working on port ${port}`);
    })
} catch (error) {
    console.log(error);
}

function normalizePort(val) {
    const port = parseInt(val, 10)

    if (isNaN(port)) {
        return val
    }

    if (port > 0) {
        return port
    }

    return false
}