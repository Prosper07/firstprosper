// Import packages
const express = require('express')
const morgan = require('morgan')
// EPICmail app
const app = express()
// Morgan
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes/message/index.routes'))
// First route (root directory)
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to EPICmail' })
})

// Starting server
app.listen('process.env.PORT || 3000')