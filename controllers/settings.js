const Settings = require('../models/settings');

exports.getIndex = (req, res, next) => {
  Settings.fetchAll(settings => {
    res.render('settings/index', {
      prods: settings,
      pageTitle: 'Settings',
      path: '/'
    });
  });
};

exports.getUsers = (req, res, next) => {
  res.render('settings/user', {
    path: '/user',
    pageTitle: 'Usuário'
  });
};

exports.getSubscription = (req, res, next) => {
  res.render('settings/subscription', {
    path: '/subscription',
    pageTitle: 'Assinatura'
  });
};

// exports.getInvoice = (req, res, next) => {
//   res.render('settings/invoice', {
//     path: '/invoice',
//     pageTitle: 'Recibos'
//   });
// };
