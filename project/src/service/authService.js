const thisModel = require('../model/users')
const bcrypt = require('bcrypt')

exports.register = async (req,res) => {
    try {
        const rb = req.body
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(rb.password, salt)
        const newUser = await thisModel.create({
            username: rb.username,
            email: rb.email,
            password: hashedPassword,
        
        })
        res.status(200).json(newUser)
    } catch (e) {
        console.log(e)
        res.status(400).json(e)
    }
}

exports.login = async (req,res) => {
    try {
        const rb = req.body
        const user = await thisModel.findOne({username: rb.username})
        !user && res.status(400).json('User Not Found')

        const validate = await bcrypt.compare(rb.password, user.password)
        !validate && res.status(400).json('Password or email is wrong')

        const {password, ...others} = user
        res.status(200).json(others)
    } catch (e) {
        console.log(e)
        res.status(400).json(e)       
    }
}