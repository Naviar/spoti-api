const express = require('express');
const router = express.Router();
const searchCtrl = require('../controllers/controller');

router.get('/getSearch', searchCtrl.saveSearch);



module.exports = router;