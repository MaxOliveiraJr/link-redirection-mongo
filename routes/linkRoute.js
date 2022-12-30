const express = require('express');

const router = express.Router();
const linkController = require("../controllers/linkcontroller");

var methodOverride = require("method-override");

router.use(methodOverride('_method'))


router.get('/', linkController.allLinks);


router.get('/add', (req, res) => res.render('index', { error: false, body: {} }));

router.get('/:title', linkController.redirect);


router.post('/', express.urlencoded({ extended: true }), linkController.addLink);



router.delete('/:id', linkController.deleteLink);

router.delete('/', express.urlencoded({ extended: true }), linkController.deleteLink);

module.exports = router;