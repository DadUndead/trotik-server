const app = require('express');
const router = app.Router();

router.get('/', (req, res) =>
    res.render('pages/index')
)

router.post('/', (req, res) =>
    console.log('try to POST smth in the root')
)

router.put('/', (req, res) =>
    console.log('try to PUT smth in the root')
)

module.exports = router;
