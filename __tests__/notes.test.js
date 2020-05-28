'use strict';

const Output = require('../lib/notes');
const option = new Output();


jest.spyOn(global.console, 'log');

describe('Note Handling Functions', () => {
  //not
  it('No console is called if you add nothing', () => {
    const obj = { action: '', payload: '', category: '' };
    option.add(obj);
    expect(console.log).not.toHaveBeenCalled();
  });
  it('Console is called when you add flags', () => {
    const obj = { action: 'add', payload: 'play', category: 'school' };
    option.valid(obj);
    expect(console.log).not.toHaveBeenCalled();
  });
  it('Using the add flag with no content or category, will not save to db', () => {
    let obj = { action: 'add', payload: '', category: '' };
    option.save(obj)
      .then(() => {
        expect(console.log).not.toHaveBeenCalled();
      });
  });
  it('Adding a category lists only the items with the same category', () => {
    let obj1 = { action: 'list', payload: 'life' };
    option.list(obj1)
      .then(() => {
        expect(console.log).not.toHaveBeenCalled();
      });
  });
 
  //call
  it('Adding a note returns a console confirming that the note is added', () => {
    const obj = { action: 'add', payload: 'play', category: 'school' };
    option.add(obj);
    expect(console.log).toHaveBeenCalled();
  });

  it('Console conforming add even without category', () => {
    const obj = { action: 'add', payload: 'play', category: '' };
    option.valid(obj);
    expect(console.log).toHaveBeenCalledTimes(3);
  });

  //line 46
  it('Add works', () => {
    let obj = { action: 'add', payload: 'save notes', category: 'life' };
    option.save(obj);
    expect(console.log).toHaveBeenCalled();
  });

  it('Update Works', () => {
    let obj = { action: 'update', payload: '5ec3e9309e75481176e50eb3'};
    option.update(obj);
    expect(console.log).toHaveBeenCalled();
  });

  // line 25-27
  it('List specific category', () => {
    let obj1 = { action: 'list', payload: 'school' };
    option.list(obj1);
    expect(console.log).toHaveBeenCalled();
  });
  
  //line 33-35
  it('list all', () => {
    let obj = { action: 'list', payload: '' };
    option.list(obj);
    expect(console.log).toHaveBeenCalled();
  });

 



  //line 53
  it('delete specific item', () => {
    let obj = { action: 'delete', payload: '5ec3e9309e75481176e50eb3' };
    option.delete(obj)
      .then(() => {
        expect(console.log).toHaveBeenCalledTimes(6);
      });
  });


});


