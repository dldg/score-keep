//import './../imports/utils';
//import someDefault from './../imports/utils';
//console.log('Log from /client/main.js');
//console.log(someDefault);

// React example
import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

Tracker.autorun(function(){
  console.log('Players list',Players.find().fetch());
});

// In order to make client side sync with server side DB.
// Wrap the query with setTimeout.
// setTimeout(function(){
// console.log('Players list',Players.find().fetch());
// },1000);



// const players = [{
//   _id: '1',
//   name: 'Lauren',
//   score: 99
// },{
//   _id: '2',
//   name: 'Cory',
//   score: -1
// },{
//   _id: '3',
//   name: 'Andrew',
//   score: -12
// }];

const renderPlayers = function (playersList) {

  // Version 1
  //let numbers = [{val: 9},{val: 2},{val: 3}, {val: 101}];

  //let newNumbers = numbers.map(function (number){
  //  return number.val - 1;
  //});

  //console.log(newNumbers);

  //return [<p key="1">1</p>,<p key="2">2</p>,<p key="3">3</p>];

  // Version 2
  //let newNumbers = playersList.map(function (number){
  //  return <p key={number.val}>{number.val}</p>;
  //});

  // return newNumbers;

  let newNumbers = playersList.map(function (player){
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
  });

  return newNumbers;

};

Meteor.startup(function(){
  let title = 'Score Keep';
  let name = 'Daniel';
  //let jsx = <p>This is from main.js</p>;
  let jsx = (
    <div>
      {/* Render h1 tag with title var as text */}
      <h1>{title}</h1>
      <p>Hello {name}!</p>
      <p>This is my second p.</p>
      {renderPlayers(players)}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
});
