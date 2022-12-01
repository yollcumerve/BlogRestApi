const router = require('express').Router()
const thisService = require('../service/categoriesService')

router.post('/create/cat', thisService.create)



router.get('/one', thisService.one)




module.exports = router