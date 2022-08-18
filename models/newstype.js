const mongoose = require('mongoose')
const News = require('./news')

const newstypeSchema = new mongoose.Schema({
    newstype: {
        type: String
    }
})

module.exports = mongoose.model('Newstype', newstypeSchema)
