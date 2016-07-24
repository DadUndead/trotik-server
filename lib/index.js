const express = require('express')
const app = express()
const mainRouter = require('../router/main-router')
const dbRouter = require('../router/db-router')
const path = require('path');

console.log('process.env.MONGODB_URI:', process.env.MONGODB_URI)

app.set('port', (process.env.PORT || 5000))

app.use(express.static(path.join(__dirname + './../public')))

app.use('/', mainRouter)
app.use('/db', dbRouter)

// views is directory for all template files
app.set('views', path.join(__dirname + './../views'))
app.set('view engine', 'ejs')

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'))
});
