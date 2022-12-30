const express = require('express');

const router = express.Router();
const linkController = require("../controllers/linkcontroller");


router.get('/:title', linkController.redirect)

router.get('/', (req, res) => res.send('Hello Word!'))

module.exports = router;