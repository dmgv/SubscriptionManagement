const Site = require('../models/site-model');

exports.getIndex = (req, res, next) => {
    res.render('site/index', {
      pageTitle: 'Goldmap',
      path: '/'
    });
};

exports.getFeatures = (req, res, next) => {
  res.render('site/features', {
    path: '/features',
    pageTitle: 'Goldmap: Funcionaliades'
  });
};