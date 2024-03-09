const App = require('../models/app-model');
const Invoice = require('../models/invoices');

exports.getDashboards = (req, res, next) => {
  res.render('app/dashboards', {
    path: '/app/dashboards',
    pageTitle: 'Goldmap: Painel'
  });
};

exports.getBudgets = (req, res, next) => {
  res.render('app/budgets', {
    path: '/app/budgets',
    pageTitle: 'Goldmap: Orçamento'
  });
};

exports.getBudgetsYear = (req, res, next) => {
  res.render('app/budgets-year', {
    path: '/app/budgets/2024',
    pageTitle: 'Goldmap: Orçamento'
  });
};

exports.getBudgetsMonth = (req, res, next) => {
  res.render('app/budgets-month', {
    path: '/app/budgets/2024/02',
    pageTitle: 'Goldmap: Orçamento'
  });
};

exports.getBalances = (req, res, next) => {
  res.render('app/balances', {
    path: '/app/balances',
    pageTitle: 'Goldmap: Saldos'
  });
};

exports.getPreferences = (req, res, next) => {
  res.render('app/preferences-account', {
    path: '/app/preferences/account',
    pageTitle: 'Goldmap: Preferências'
  });
};

exports.getPreferencesProfile = (req, res, next) => {
  res.render('app/preferences-profile', {
    path: '/app/preferences/profile',
    pageTitle: 'Goldmap: Preferências'
  });
};

exports.getPreferencesBilling = (req, res, next) => {
  Invoice.fetchAll(invoices => {
    res.render('app/preferences-billing', {
      invoices,
      path: '/app/preferences/billing',
      pageTitle: 'Goldmap: Preferências'
    });
  })
};

exports.getPreferencesNotifications = (req, res, next) => {
  res.render('app/preferences-notifications', {
    path: '/app/preferences/notifications',
    pageTitle: 'Goldmap: Preferências'
  });
};