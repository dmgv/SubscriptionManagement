const path = require('path');

const express = require('express');

const appController = require('../controllers/app-controller');

const router = express.Router();

// /app/dashboards => GET
router.get('/dashboards', appController.getDashboards);

// /app/budgets => GET
router.get('/budgets', appController.getBudgets);

// /app/balances => GET
router.get('/balances', appController.getBalances);

// /app/preferences => GET
router.get('/preferences', appController.getPreferences);

module.exports = router;
