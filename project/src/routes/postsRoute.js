const router = require('express').Router()
const thisService = require('../service/postsService')

router.post('/create/post', thisService.create)

router.put('/update/post/:id', thisService.update)

router.delete('/post/delete/:id', thisService.delete)

router.get('/get/post/:id', thisService.getPost)

router.get('/all/post', thisService.all)

module.exports = router