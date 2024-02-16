const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'subscriptions.json'
);

const getSubscriptionsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Subscription {
  constructor(id, plan_id, dueDate, cancellation_date, user_id, created, modified) {
    this.id = id;
    this.plan_id = plan_id;
    this.dueDate = dueDate;
    this.cancellation_date = cancellation_date;
    this.user_id = user_idl
    this.created = created;
    this.modified = modified;
  }

  save() {
    getSubscriptionsFromFile(subscriptions => {
      subscriptions.push(this);
      fs.writeFile(p, JSON.stringify(subscriptions), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getSubscriptionsFromFile(cb);
  }
};
