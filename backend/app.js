const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const ejs = require('ejs')
const bodyParser = require('body-parser')

// Setting view engine
app.set('view engine', 'ejs')

// Getting form data
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', require('../backend/routes'))




app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}... `)
})