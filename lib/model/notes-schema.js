'use strict';

const mongoose = require('mongoose');


const notes = mongoose.Schema({
  payload:{type:String,required:true},
  category:{type:String,required:true,uppercase:true},
});

module.exports =  mongoose.model('notes',notes);