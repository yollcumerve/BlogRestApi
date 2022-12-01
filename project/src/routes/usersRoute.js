const router = require('express').Router()
const thisService = require('../service/usersService')


router.put('/update/:id', thisService.update)

router.delete('/delete/:id', thisService.delete)

//fetch user by using id 
router.get('/fetch/:id', thisService.fetchUser)


module.exports = router
