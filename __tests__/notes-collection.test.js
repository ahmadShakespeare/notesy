'use strict';

require('@code-fellows/supergoose');
let Collection = require('../lib/model/notes-collection');
let Crud = new Collection();

describe('notes-collection Model', () => {

  it('Mongodb list() without category triggers the get mongodb function to lists all items in db', () => {
    let obj = {};
    return Crud.get(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('Mongodb list() with category triggers the get mongodb function to list all items of the same category in db',()=>{
    let obj= {payload:'write',category:'SCHOOL'};
    return Crud.create(obj)
      .then(record =>{
        return Crud.get({payload:record.category})
          .then(note => {
            Object.keys(obj).forEach(key => {
              expect(note[key]).toEqual(obj[key].category);
            });
          });
      });
  });

  it('Mongodb add() with category triggers the create mongodb function to create a new item',()=>{
    let obj= {payload:'write',category:'SCHOOL'};
    return Crud.create(obj)
      .then(record =>{
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('Mongodb add() without category triggers the create mongodb function to create a new item with a default category',()=>{
    let obj= {payload:'write',category:'SCHOOL'};
    return Crud.create(obj)
      .then(record =>{
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('Mongodb update() triggers the update mongodb function to update an item with a specific id',()=>{
    let obj= {payload:'write',category:'SCHOOL'};
    return Crud.create(obj)
      .then(record =>{
        return Crud.update({payload:record._id})
          .then(note => {
            Object.keys(obj).forEach(key => {
              expect(note[key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('Mongodb delete() triggers the delete mongodb function to update an item with a specific id',()=>{
    let obj= {payload:'write',category:'SCHOOL'};
    return Crud.create(obj)
      .then(record =>{
        return Crud.delete({payload:record._id})
          .then(note => {
            expect(note).toBeUndefined();
          });
      });
  });

});