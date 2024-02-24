const path = require('path');

const express = require('express');

const appController = require('../controllers/app-controller');

const router = express.Router();

// /app/dashboards => GET
router.get('/dashboards', appController.getDashboards);

// /app/budgets => GET
router.get('/budgets', appController.getBudgets);

// /app/budgets => GET
router.get('/budgets/2024', appController.getBudgetsYear);

// /app/budgets => GET
router.get('/budgets/2024/02', appController.getBudgetsMonth);

// /app/balances => GET
router.get('/balances', appController.getBalances);

// /app/preferences => GET
router.get('/preferences', appController.getPreferences);

// /app/preferences => GET
router.get('/preferences/profile', appController.getPreferencesProfile);

module.exports = router;
