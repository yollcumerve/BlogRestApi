const mongoose = require('mongoose')
const dbConnect = require('../modules/dbConnection')
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
       
    },
    photo: {
        type: String,
       
    }, 
    categories: {
        type: Array,
    }
},{ timestamps: true})


module.exports = mongoose.model('Post', PostSchema)