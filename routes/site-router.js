const path = require('path');

const express = require('express');

const siteController = require('../controllers/site-controller');

const router = express.Router();

router.get('/', siteController.getIndex);

router.get('/features', siteController.getFeatures);

module.exports = router;
