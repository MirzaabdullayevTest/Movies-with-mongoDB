const uri = 'mongodb+srv://Mirzaabdullayev:sgAlu61yWPThsyLe@cluster0.sboev7q.mongodb.net/movies'
const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect(uri, () => {
            console.log('MongoDB connected successfully');
        })
    } catch (error) {
        console.log(error);
    }
}