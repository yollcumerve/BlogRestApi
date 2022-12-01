const mongoose = require('mongoose')
const dbConnect = require('../modules/dbConnection')
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    
},{ timestamps: true})


module.exports = mongoose.model('Category', CategorySchema)