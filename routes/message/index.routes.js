const express = require('express')
const router = express.Router()

router.use('/api/v1/messages', require('./post.routes'))

module.exports = router