// import './../imports/utils';
//import {greetUser} from './../imports/utils';
//import {add} from './../imports/math';
//import add from './../imports/math';
//console.log('Log from /server/main.js');
//console.log(greetUser());
//console.log('Add test: ' + add(5,6));

import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function () {
  Players.insert({
    name: 'Daniel',
    score: 3
  });
  Players.insert({
    name: 'Andrew',
    score: 4
  });
  console.log(Players.find().fetch());
});
