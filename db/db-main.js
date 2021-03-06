const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection

db.on('error', err => console.warn('Database error', err.message))

db.once('open', () => console.log("Connected to DB!"));
