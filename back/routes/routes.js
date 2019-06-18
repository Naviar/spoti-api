const express = require('express');
const router = express.Router();
const searchCtrl = require('../controllers/controller');

router.get('/getSearch/:termino', searchCtrl.saveSearch);



module.exports = router;