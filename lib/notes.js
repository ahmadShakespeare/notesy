'use strict';

const collection = require('./model/notes-collection');
let Crud = new collection();

class Output {

  constructor() {

  }
  add(note) {
    if (note.action === 'add' && note.payload && note.category) {
      console.log(`Adding note: ${note.payload}\nCategory: ${note.category}\n`);
    }
  }

  async list(note) {
    let find = await Crud.get(note);
    find.forEach(val => { 
      console.log(`note: ${val.payload} | Category: ${val.category} | id: ${val._id}`);
      console.log('\n------------------------------------------------------------\n');
    });
  }

  async save(note) {
    if(note.category){
      console.log('your note is saved yaaay!!');
      await Crud.create(note);
    }
  }

  async delete(note) {
    console.log(`The chosen note has been deleted...\nRIP note ${note.payload}\nyou will be missed a lot...`);
    await Crud.delete(note);
  }

  async update(note){
    console.log(`note ${note.payload} is updated!!`);
    await Crud.update(note);
  }

  valid(note) {
    if (!note.category && note.action == 'add') {
      console.log('the CLI should be -a || --add \'note text\' --category \'the category\'');
    }
  }
}

module.exports = Output;

