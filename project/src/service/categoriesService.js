const thisModel = require('../model/categories')

exports.create = async (req,res) => {
    try {
        const newCat = await thisModel.create(req.body)
        res.status(200).send(newCat)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)        
    }
}


exports.update = async (req,res) => {
    try {
        
    } catch (e) {
        console.log(e)
        res.status(400).json(e)
    }
}

exports.one = async (req,res) => {
    try {
        
    } catch (e) {
        console.log(e)
        res.status(400).json(e)
    }
}


exports.all = async (req,res) => {
    try {
        const cat = await thisModel.find()
        res.status(200).send(cat)
    } catch (e) {
        console.log(e)
        res.status(400).json(e)
    }
}

