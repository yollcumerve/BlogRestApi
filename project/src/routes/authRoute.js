const router = require('express').Router()
const thisService = require('../service/authService')

//REGİSTER
router.post('/register', thisService.register)

//LOGIN
router.post('/login', thisService.login)

module.exports = router