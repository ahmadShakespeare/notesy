'use strict';

const mongoose = require('mongoose');

class Input {
  constructor() {
    const note = process.argv.slice(2);
    this.action = this.actions(note[0]);
    this.payload = this.payloads(note[1]) || note[1];//it is a note but when use list it is category or id
    this.category = note[3] || 'Default';
  }
  payloads(payload) {
    if (this.action === 'add') {
      return payload ? payload : console.log('error text is: ', payload);
    }
  }

  actions(action) {
    if (action === '-a' || action=== '--a') {
      return 'add';
    }
    else if (action === '--add' || action === '-add') {
      return 'add';
    }
    else if (action === '--list' || action === '-list' || action === '-l' || action === '--l') {
      return 'list';
    }
    else if (action === '--delete' || action === '-delete' || action === '-d' || action === '--d') {
      return 'delete';
    }
    else if (action === '--update' || action === '-update' || action === '-u' || action === '--u') {
      return 'update';
    }
    else {
      console.log(' \nThe used action flag is not correct,\n please make sure that you use one of the provided actions,\n add, list, update or update.\n the used action is: ', action, '\n');
      mongoose.disconnect();
    }
  }

}



module.exports = Input;
