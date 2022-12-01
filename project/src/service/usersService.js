const thismodel = require('../model/users')
const bcrypt = require('bcrypt')
const postModel = require('../model/posts')

exports.update = async (req,res) => {
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {
            const updated = await thismodel.findByIdAndUpdate(req.params.id,{
                $set: req.body, //whatevet comes from req.body , it sets 
            }, {new: true}) // after new:true, json will return us the updatedData
            res.status(200).json(updated)
        } catch (e) {
            console.log(e)
            res.status(400).json(e)
            
        }
    }else{
        res.status(401).json('You can update only your account')
    }
    
}


/*
Before deleting user , this user has post before so if I delete user I'm gonna find all posts belongs to 
user and delete all of them(using deleteMany) then I m gonna delete user too
 */
exports.delete = async (req,res) => {
    if(req.body.userId === req.params.id){
        try {
            const user = await thismodel.findById(req.params.id)

        try {
            await postModel.deleteMany({username: user.username})
            await thismodel.findByIdAndDelete(
                req.params.id
            );
            res.status(200).json('Deleted successfully')
        } catch (e) {
            console.log(e)
            res.status(400).json(e)
        }
          } catch (e) {
            console.log(e)
            res.status(404).json('User not found')
          }
    }else{
        res.status(401).json('You can delete only your own accaount')
    }
}

exports.fetchUser = async (req,res) => {
    try {
        const user = await thismodel.findById(req.params.id)
        //but I dont want to send every info, when we fetch any user we are not supposed to see its password
        const { password, ...others} = user._doc
        res.status(200).json(others)
    } catch (e) {
        console.log(e)
        res.status(400).json(e)
    }
}