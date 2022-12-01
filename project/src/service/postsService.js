const thisModel = require('../model/posts')

exports.create = async (req,res) => {
   try {
    const newPost = await thisModel.create(req.body)
    res.status(201).send(newPost)
   } catch (e) {
    console.log(e)
    res.status(400).send(e)
   }
}

exports.update = async (req,res) => {
    try {
        const post = await thisModel.findById(req.params.id)
        if(post.username === req.body.username){
            try {
           const updated = await thisModel.findByIdAndUpdate(req.params.id, { $set: req.body },{ new: true})
           res.status(200).json(updated)
            } catch (error) {
                console.log(e)

            }
        }else{
            res.status(401).json('You can update only your own post!!!')
        }
        
    } catch (e) {
        res.status(400).json(e)
    }
}

exports.delete = async (req,res) => {
    try {
        const post = await thisModel.findById(req.params.id)
        if(post.username === req.body.username){
            try {
                await thisModel.findByIdAndDelete(req.params.id)
                res.status(200).json('This post deleted successfully')
            } catch (e) {
                console.log(e)
                res.status(400).json('You delete only your own post')
            }
        }
        
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

exports.getPost = async (req,res) => {
    try {
        const post = await thisModel.findById(req.params.id)
        res.status(200).send(post)
    } catch (e) {
        console.log(e)
        res.status(400).json(e)
    }
}

exports.all = async (req,res) => {
    const username = req.query.username  //?user=
    const catName = req.query.cateName //?catName=
    try {
        //I m gonna create here return this array as response
        let posts;
        if(username){
            posts = await thisModel.find({username: username })
        }else if(catName){
            posts = await thisModel.find({ categories: { //but how can I say if this array includes this category name --> İN METHOD
                $in: [catName] /* I'm gonna indicate my category name so it basically says look this categories array and if inside include 
                this category name just find this and assign to this post 
                */

            }})
        }else{
            posts = await thisModel.find()
        }
        res.status(200).json(posts)
    } catch (e) {
        console.log(e)
        res.status(400).json(e)
    }
}

