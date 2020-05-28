'use strict';

const Input = require('../lib/input');
const option = new Input();

jest.spyOn(global.console, 'log');

describe('Input Validation',()=>{
 
  describe('Bad Input Validation', () => {
    it('Returns Error if the added Action is Not Correct',()=>{
      option.payloads();
      option.action = 'add';
      option.payload;
      expect(console.log).toHaveBeenCalled();
    });

    it('Returns an error if the desired Action is spelled wrong',()=>{
      option.actions('-ads');
      option.action;
      option.payload;
      expect(console.log).toHaveBeenCalled();
    });
    return false;
  });

  describe('Correct Input Validation', () => {
    it('Returns the Action add if "-a / --a / -add / --add" flag is used ',()=>{
      expect(option.actions('--add')).toEqual('add');
      expect(option.actions('-add')).toEqual('add');
      expect(option.actions('-a')).toEqual('add');
      expect(option.actions('--a')).toEqual('add');
      expect(option.actions('--list')).toEqual('list');
      expect(option.actions('--delete')).toEqual('delete');
      expect(option.actions('--update')).toEqual('update');
    });

    it('Returns the Action list if "-l / --l / -list / --list" flag is used ',()=>{
      expect(option.actions('--l')).toEqual('list');
      expect(option.actions('-l')).toEqual('list');
      expect(option.actions('-list')).toEqual('list');
      expect(option.actions('--list')).toEqual('list');
    });

    it('Returns the Action update if "-u / --u / -update / --update" flag is used ',()=>{
      expect(option.actions('--update')).toEqual('update');
      expect(option.actions('-update')).toEqual('update');
      expect(option.actions('-u')).toEqual('update');
      expect(option.actions('--u')).toEqual('update');
    });

    it('Returns the Action delete if "-d / --d / -delete / --delete" is used ',()=>{
      expect(option.actions('--delete')).toEqual('delete');
      expect(option.actions('-delete')).toEqual('delete');
      expect(option.actions('-d')).toEqual('delete');
      expect(option.actions('--d')).toEqual('delete');
    });

    it('Returns The note the user written when using add',()=>{
      let note = 'Watch movie';
      option.action = 'add';
      expect(option.payloads(note)).toEqual(note);
    });
  });
});