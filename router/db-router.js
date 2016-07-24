const app = require('express')
const router = app.Router()
const db = require('../db/db-main')


router
    .get('/', (request, response) => {
        response.results = [{
            id: 1,
            name: 'one'
        }, {
            id: 2,
            name: 'two'
        }, {
            id: 3,
            name: 'three'
        }, ]

        // console.log('db request:', request)

        response.render('../views/pages/db', response);
    });

module.exports = router;
