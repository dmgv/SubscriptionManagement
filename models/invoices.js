const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'invoices.json'
);

const getInvoicesFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Invoice {
  constructor(id, date, invoiceNumber, amount) {
    this.id = id;
    this.date = date;
    this.invoiceNumber = invoiceNumber;
    this.amount = amount;
  }

  save() {
    getInvoicesFromFile(invoices => {
      invoices.push(this);
      fs.writeFile(p, JSON.stringify(invoices), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getInvoicesFromFile(cb);
  }
};
