const App = require('../models/app-model');

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

exports.getBalances = (req, res, next) => {
  res.render('app/balances', {
    path: '/app/balances',
    pageTitle: 'Goldmap: Saldos'
  });
};

exports.getPreferences = (req, res, next) => {
  res.render('app/preferences', {
    path: '/app/preferences',
    pageTitle: 'Goldmap: Preferências'
  });
};