const path = require('path');

const express = require('express');

const settingsController = require('../controllers/settings');

const router = express.Router();

router.get('/', settingsController.getIndex);

router.get('/users', settingsController.getUsers);

router.get('/subscription', settingsController.getSubscription);

// router.get('/invoices', settingsController.getInvoices);

module.exports = router;
