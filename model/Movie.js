const { Schema, model } = require('mongoose')

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 4,
        // unique: true
    },
    type: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        default: 'https://kravmaganewcastle.com.au/wp-content/uploads/2017/04/default-image-620x600.jpg'
    },
    imdb: {
        type: Number,
        required: function () {
            return this.isPublished
        },
        default: 0
    },
    isPublished: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = model('movie', movieSchema)